<template>
  <div class="w-full gap-4 [&>*]:bg-orange bg-green flex ">
    <div class="w-full h-[20rem] " ref="jsEditorContainer">
      <span>JS</span>
    </div>
    <div class="w-full" ref="xmlEditorContainer">
      <span>xml</span>
    </div>
    <div class="" ref="cssEditorContainer">
      <span>css</span>
    </div>
  </div>
  <!-- <div v-html="srcDoc"></div> -->
  <div class="">
    <iframe ref="iframe" class="h-full w-full" sandbox="allow-scripts" frameBorder="0" />
  </div>
</template>

<style scoped>
.cm-editor {
  height: h-full;
}
</style>

<script lang="ts" setup>
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

const debounceUpdateIframe = useDebounce(() => {
  iframe.value!.srcdoc = generateHTML(payload)
}, 1000)

const iframe = ref<HTMLIFrameElement>()
const payload = reactive({
  html: "<p>Hello</p>\n<p>World</p>",
  css: "p {\ncolor: red\n}",
  javascript: "document.querySelectorAll('p')[1].style.color='green'",
})

const jsEditorContainer = ref<HTMLDivElement | null>(null)
const cssEditorContainer = ref<HTMLDivElement | null>(null)
const xmlEditorContainer = ref<HTMLDivElement | null>(null)


const content = ref('let a = 0;\n#hello world')
import { basicSetup } from 'codemirror';
import { EditorView, keymap } from '@codemirror/view';
import { indentWithTab } from '@codemirror/commands';
import { javascript } from '@codemirror/lang-javascript'
import { xml } from '@codemirror/lang-xml'
import { css } from '@codemirror/lang-css'
import { oneDark } from '@codemirror/theme-one-dark'

onMounted(() => {
  if (!(jsEditorContainer.value && cssEditorContainer.value && xmlEditorContainer.value)) return;
  iframe.value!.srcdoc = generateHTML(payload)
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
    ],
    parent: jsEditorContainer.value,
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
      })
    ],
    parent: xmlEditorContainer.value,
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
      })
    ],
    parent: cssEditorContainer.value,
  })

  watch(payload, () => {
    debounceUpdateIframe()
  })
})

</script>