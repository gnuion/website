<template>
  <div class="gap-4 flex flex-col px-4 text-white">
    <div class="w-full gap-4 flex">
      <div v-for="editor, oKey in payload" ref="refs" :key="oKey"
        :class="`${activeTab == oKey ? 'w-2/3  shrink-0' : 'w-1/3'} flex-auto overflow-hidden`" @click="activeTab = oKey">
        <p class="my-3 uppercase">{{ oKey }}</p>
      </div>
    </div>
    <iframe ref="iframe" sandbox="allow-scripts" frameBorder="0" class="h-[50vh] bg-white flex-grow" />
  </div>
</template>

<style>
::-webkit-scrollbar {
  width: 3px;
  height: 3px;
}

::-webkit-scrollbar-track {
  background: #575757;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

/* ::-webkit-scrollbar-thumb:hover {
  background: #555;
} */
</style>

<script lang="ts" setup>
import { basicSetup } from 'codemirror';
import { EditorView, keymap } from '@codemirror/view';
import { indentWithTab } from '@codemirror/commands';
import { javascript } from '@codemirror/lang-javascript'
import { xml } from '@codemirror/lang-xml'
import { css } from '@codemirror/lang-css'
import { oneDark } from '@codemirror/theme-one-dark'

const debounceUpdateIframe = useDebounce(() => {
  iframe.value!.srcdoc = generateHTML(payload)
}, 1000)

function generateHTML(
  payload: Record<string, any>,
) {
  return `<html>
        <head>
            <style id="_style">${payload.css}</style>
            <script type="module" id="_script">
                ${payload.javascript}
            </\script>
        </head>
        <body>
            ${payload.html}
        </body>
    </html`
}
const activeTab = ref('javascript');
const refs = ref<Array<HTMLDivElement>>([]);
const iframe = ref<HTMLIFrameElement>();
const payload = reactive({
  javascript: `
const canvas = document.getElementById("canvas");
const fragmentShaderText = document.getElementById('fragment').innerText;
const vertexShaderText = document.getElementById('vertex').innerText;
document.body.style.backgroundColor="black";
document.body.style.color="white";
canvas.style.backgroundColor="green";
const gl = canvas.getContext("webgl")
if (!gl) {
  alert("WebGL not supported")
}
const canvasDim = [300, 300]
canvas.width = canvasDim[0];
canvas.height = canvasDim[1];
gl.viewport(0,0, canvasDim[0], canvasDim[1]);
gl.clearColor(0.8,0.8,0.8, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT);
const vertexShader = gl.createShader(gl.VERTEX_SHADER);
const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(vertexShader, vertexShaderText);
gl.shaderSource(fragmentShader, fragmentShaderText);
gl.compileShader(vertexShader);
if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
  console.log('Error compiling vertexShader', gl.getShaderInfoLog(vertexShader));
}
gl.compileShader(fragmentShader);
if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
  console.log('Error compiling fragmentShader', gl.getShaderInfoLog(fragmentShader));
}
const program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);
if (!gl.getProgramParameter(program,gl.LINK_STATUS)) {
  console.log("Error linking program", gl.getProgramInfoLog(program));
}
gl.validateProgram(program); 
if (!gl.getProgramParameter(program,gl.VALIDATE_STATUS)) {
  console.log("Error linking validating program", gl.getProgramInfoLog(program));
}
const triangleVertices = [
  0.0, 0.5, 1.0, 0.0, 0.0,
  -0.5, -0.5, 0.0, 1.0, 0.0,
  0.5, -0.5, 0.0, 0.0, 1.0
]

const triangleVertexBufferObject = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexBufferObject);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVertices), gl.STATIC_DRAW);
const positionAttribLocation = gl.getAttribLocation(program, 'vertPosition');
const colorAttribLocation = gl.getAttribLocation(program, 'vertColor');
gl.vertexAttribPointer(
  positionAttribLocation,
  2,
  gl.FLOAT,
  gl.FALSE,
  5 * Float32Array.BYTES_PER_ELEMENT,
  0
)
gl.vertexAttribPointer(
  colorAttribLocation,
  3,
  gl.FLOAT,
  gl.FALSE,
  5 * Float32Array.BYTES_PER_ELEMENT,
  2 * Float32Array.BYTES_PER_ELEMENT, 
)
gl.enableVertexAttribArray(positionAttribLocation);
gl.enableVertexAttribArray(colorAttribLocation);
gl.useProgram(program);
gl.drawArrays(gl.TRIANGLES, 0, 3);
`,
  html: `
<canvas id="canvas" width=300 height=300></canvas>
<script id="vertex" type="notjs">
precision mediump float;
attribute vec2 vertPosition;
attribute vec3 vertColor;
varying vec3 fragColor;
void main() {
  fragColor = vertColor;
  gl_Position = vec4(vertPosition, 0.0, 1.0);
}
</\script>
<script id="fragment" type="notjs">
precision mediump float;
varying vec3 fragColor;
void main() {
  gl_FragColor = vec4(fragColor, 1.0);
}
</\script>
`,
  css: "",
})


onMounted(() => {
  if (refs.value.length == 0 || !iframe.value) return;


  iframe.value.srcdoc = generateHTML(payload)
  const jsEditor = new EditorView({
    doc: payload.javascript,
    extensions: [
      oneDark,
      basicSetup,
      keymap.of([indentWithTab]),
      javascript(),
      EditorView.updateListener.of((newState) => {
        payload.javascript = newState.state.doc.toString()
      }),
      EditorView.theme({
        '&': { height: '300px' },
        '.cm-scroller::-webkit-scrollbar-thumb': { background: 'yellow' },
        '.cm-scroller': { overflow: 'auto' },
      })
    ],
    parent: refs.value[0],
  })
  const xmlEditor = new EditorView({
    doc: payload.html,
    extensions: [
      oneDark,
      basicSetup,
      keymap.of([indentWithTab]),
      xml(),
      EditorView.updateListener.of((newState) => {
        payload.html = newState.state.doc.toString()
      }),
      EditorView.theme({
        '&': { height: '300px' },
        '.cm-scroller::-webkit-scrollbar-thumb': { background: 'red' },
        '.cm-scroller': { overflow: 'auto' },

      })
    ],
    parent: refs.value[1],
  })
  const cssEditor = new EditorView({
    doc: payload.css,
    extensions: [
      oneDark,
      basicSetup,
      keymap.of([indentWithTab]),
      css(),
      EditorView.updateListener.of((newState) => {
        payload.css = newState.state.doc.toString()
      }),
      EditorView.theme({
        '&': { height: '300px' },
        '.cm-scroller::-webkit-scrollbar-thumb': { background: 'cyan' },
        '.cm-scroller': { overflow: 'auto' },
        // '::-webkit-scrollbar': {}
      })
    ],
    parent: refs.value[2],
  })

  watch(payload, () => {
    debounceUpdateIframe()
  })
})

</script>