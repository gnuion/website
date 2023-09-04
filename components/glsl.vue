<template>
  <select name="example" v-model="example">
    <option value="Example001">01_simple_triangle</option>
    <option value="Example002">02_simple_triangle</option>
  </select>
  <p>{{ example }}</p>
  <canvas ref="cvs" width="200" height="200" class="bg-blue-300" />
</template>
<script lang="ts" setup>
const example = ref<'Example001' | 'Example002'>('Example001')

const cvs = ref<HTMLCanvasElement | null>(null)

async function loadExample(gl: WebGLRenderingContext, program: WebGLProgram | null) {
  if (program) {
    gl.deleteProgram(program);
  }
  const main = await import('@/glsl/ts/examples').then(module => module[example.value])
  program = main(gl)
  return program
}

onMounted(async () => {
  if (!cvs.value) {
    return
  }
  const gl = cvs.value.getContext('webgl');
  if (!gl) {
    console.log("WebGL is not supported!")
    return
  }
  let program = await loadExample(gl, null)

  watch(example, (newExample, oldExample) => {
    if (newExample == oldExample) return;
    loadExample(gl, program)
  })
})



</script>
