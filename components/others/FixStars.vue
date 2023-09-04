<!-- <template>
  <div class="absolute top-0 -z-1 w-full">
    <canvas ref=canvas id="starfield" width="800" height="1000" />
  </div>
</template>
<style scoped>
canvas {
  width: 100%;
  height: auto;
  background: #000;
}
</style>
<script lang=ts setup>
const canvas = ref<HTMLCanvasElement | null>(null)
onMounted(() => {
  function getRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  if (canvas.value) {
    const context = canvas.value.getContext("2d")!
    const stars = 10000
    const colorrange = [0, 60, 240];
    for (let i = 0; i < stars; i += 1) {
      const x = getRandom(0, canvas.value.offsetWidth);
      const y = getRandom(0, canvas.value.offsetHeight);
      const radius = Math.random() * .6;
      const hue = colorrange[getRandom(0, colorrange.length - 1)]
      const sat = getRandom(50, 100)
      context.beginPath();
      context.arc(x, y, radius, 0, 360);
      context.fillStyle = `hsl(${hue},${sat}%,88%)`;
      context.fill()
    }
  }

})
</script> -->