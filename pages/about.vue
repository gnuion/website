<template>
  <section class="flex flex-col gap-4">
    <div class="">
      Hello 👋🏼, I am <em>gnuion</em> [gnuion] pronounced the same. Native speakers of languages that are not pronounced
      the same as they are written, such as English and French, may have difficulties. Anyhow, any language is useful. And
      some can be used to program computers to do things for us.
    </div>
    <div>
      Automation is great! I believe it can improve our lives and free up time. I know Kubernetes, Helm, OPA Gatekeeper,
      Traefik and other tools. Currently exploring WebGL.
    </div>
    <div>
      Interested in technology, open-source, machine learning, desktop environments, automation, 3Dgraphics.
    </div>
    <div>
      Besides coding and abstract thinking, I workout.
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