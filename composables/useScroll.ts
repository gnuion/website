export function useScroll() {
  const y = ref(0)
  const update = useDebounce(() => {
    const yval = window.scrollY / (document.body.scrollHeight - window.innerHeight)
    y.value =Math.round(yval*100)/100
    console.log(y.value)
  })
  onMounted(()=> window.addEventListener('scroll', update))
  onUnmounted(() => window.removeEventListener('scroll', update))
  return {y}
}