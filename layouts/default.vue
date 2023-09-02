<template>
  <div class="min-h-[100vh] flex flex-col">
    <Header />
    <CaoticMovement />
    <main class="text-lg text-white w-full grow-1 max-w-6xl px-6 pt-20 mx-auto font-mono">
      <slot />
    </main>
    <Footer />
  </div>
</template>
<style lang="css">
main a {
  --at-apply: underline decoration-dotted text-inherit underline-offset-6;
}
</style>