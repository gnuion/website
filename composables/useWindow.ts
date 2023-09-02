export function useWindow() {
  let width = 0
  let height = 0

  const update = () => {
    width = window.innerWidth,
    height = window.innerHeight
  }

  onMounted(()=> window.addEventListener('resize', update))
  onUnmounted(() => window.removeEventListener('resize', update))

  return reactive({
    size: [width, height]
  })
}