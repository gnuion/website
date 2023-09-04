<template>
  <header class="text-black font-bold font-mono py-2 z-50 fixed left-0 top-0 right-0  bg-yellow-500/50 ">
    <nav class="flex max-w-6xl mx-auto justify-between px-6">
      <div>
        <NuxtLink to="/">
          <span class="text-xl uppercase font-bold">Jon</span>
        </NuxtLink>
      </div>
      <ul class="flex gap-4 text-xl">
        <li v-for="item in links">
          <NuxtLink :to="item.link">
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
<style lang="css" scoped>
a {
  --at-apply: text-black decoration-none
}
</style>
<script setup lang="ts">
const links = [
  // {
  //   id: 0,
  //   label: "Blog",
  //   link: "/blog"
  // },
  {
    id: 1,
    label: "Projects",
    link: "/projects"
  },
  // {
  //   id: 2,
  //   label: "Demo",
  //   link: "/demo"
  // }
]
// const headerData = useData()
// console.log(headerData)
</script>