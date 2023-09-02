<template>
  <section class="flex flex-col gap-4">
    <div class="">
      Hello 👋🏼, I am <em>gnuion</em> [gnuion] pronounced the same according to IPA. Native English speakers may have difficulties because their language is not pronounced the same as it is written. I believe French is even worse. I don't know why. Anyhow, any language is beautiful. And some can be used to talk to non living things, such as computers. It is wonderful to see how this evolution is shaping our world.
    </div>
    <div>
      I love automation! I believe it can improve our lives and free up time. So I learned Kubernetes and Helm.
      Unknowingly I might have some golang experience by tinkering with Helm, OPA Gatekeeper, Traefik and other tools I
      might not know they are built in Golang yet.
    </div>
    <div>
      Passionate about open source software. Most of the technologies I use everyday are open source. I am using a KDE desktop environment running on an alpine laptop. I got so adapted to linux that I probablly would get lost in Windows 11. My dream is to finally be able to exit the vim editor. Then I'd be calling myself a developer.
    </div>
    <div>
      Besides my passing for coding and abstract thinking, I enjoy a good workout. 
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