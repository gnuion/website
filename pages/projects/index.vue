<template>
  <div>
    <div>
      <ul class="text-xl flex flex-col gap-4">
        <li>
          <NuxtLink to="/projects/webgl">
            <h2>webGL experiments</h2>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/projects/vuenus">
            <h2>Vuenus notebook</h2>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink _to="/projects/webgl" :disabled="true">
            <h2>Interactive Postgres</h2>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>