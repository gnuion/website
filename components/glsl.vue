<template>
  <div>
    <canvas ref="cvs" width="400" height="400" class="bg-blue-300" />
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  source: keyof typeof import("/storage/gnuion/website/glsl/ts/examples/index")
}>()
const cvs = ref<HTMLCanvasElement | null>(null)
let program: WebGLProgram | null = null
const gl = ref<WebGLRenderingContext | null>(null)
onMounted(async () => {
  if (!cvs.value) {
    return;
  }
  gl.value = cvs.value.getContext('webgl');
  if (!gl.value) {
    console.log("WebGL is not supported!");
    return;
  }
  program = await initialize(gl.value, null, props.source)
  watch(() => props.source, async (newSource) => {
    program = await initialize(gl.value!, program, props.source)
  })
})
async function initialize(gl: WebGLRenderingContext, program: WebGLProgram | null, source: string) {
  if (program) {
    gl.deleteProgram(program);
  }
  const main = await import('@/glsl/ts/examples').then(module => module[props.source]);
  return main(gl);
}
</script>
