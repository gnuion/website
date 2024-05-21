<template>
  <section class="flex flex-col gap-4">
    <div class="">
      Hello 👋🏼, I am <em>Jon</em> [ʤɔ́n]. I speak a few human and machien languages.
    </div>
    <div>
      I love automation! I believe it can improve our lives and free up time. So I learned Kubernetes and Helm.
      Unknowingly I might have some golang experience by tinkering with Helm, OPA Gatekeeper, Traefik and other tools I
      might not know they are built in Golang yet.
    </div>
    <div>
      Passionate about open source and software in general. Recently I discovered Nix and I became a fan. It is 
      open-source and is used to manage a large number of software packages. It is declarative and works on
      Mac as well as other Unix-like systems.
    </div>
    <div>
      Besides coding and abstract thinking, I might try working out.
    </div>
  </section>
  <section class="mt-20 line-height-8">
    <h3>Find me on:</h3>
    <ul class="flex gap-4">
      <li v-for="item in socials">
        <NuxtLink :to="item.link" target="_blank">
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
<script setup lang="ts" >
const socials = [
  {
    id: 0,
    label: 'GitHub',
    link: 'https://github.com/gnuion'
  },
  {
    id: 1,
    label: 'Discord',
    link: 'https://discordapp.com/users/gnuion'
  },
  {
    id: 2,
    label: 'YouTube',
    link: 'https://www.youtube.com/channel/UCdtTyubYjtzgsi4_txSSVUg'
  },
  {
    id: 3,
    label: 'X',
    link: 'https://twitter.com/gnuion'
  }
]
useHead({
  title: 'Gnuion | About me'
})
definePageMeta({
  alias: '/'
})
</script>