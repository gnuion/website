<template>
  <div class="fixed inset-0 bg-red -z-1 overflow-hidden">
    <canvas class="bg-black w-full h-full" ref="cvs" />
  </div>
</template>

<script lang="ts" setup>
import { CaoticMovement } from './modules/caoticMovement'
const cvs = ref<HTMLCanvasElement | null>(null)
const mouse = useMouse();

onMounted(() => {
  if (cvs.value != null) {
    cvs.value.width = window.innerWidth
    cvs.value.height = window.innerHeight
    const ctx = cvs.value.getContext('2d')!
    const diamonds = new CaoticMovement({
      num: 10,
      ctx,
      colorArray: ["#de3d3d", "#090c0b", "#0d2527", "#267368", "#00b1a0"],
      maxSpeed: .5,
    })
    diamonds.animate()
    watch(mouse.value, (updatedMouse) => {
      diamonds.set_cursor(updatedMouse.pos)
    })
  }
}


)

</script>