export function useMouse() {
  const mouse = ref({
    pos: [0, 0] as [number, number]
  })

  const update = (event: MouseEvent) => {
    mouse.value.pos = [event.x, event.y]
  }

  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))

  return mouse
}