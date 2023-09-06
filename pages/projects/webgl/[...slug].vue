<template>
  <div class="px-6 flex flex-col-reverse">
    <div>
      <div class="py-6">
        <select v-model="projectId" @change="navigate">
          <option v-for="project in projects" :value="project.id">{{ project.name }}</option>
        </select>
      </div>
    </div>
    <div>
      <p class="text-xl font-bold my-4">{{ project.name }}</p>
      <Glsl :source="project.source" />
    </div>
  </div>
</template>
<script lang="ts" setup>
type Project = {
  id: string,
  name: string,
  source: keyof typeof import("/storage/gnuion/website/glsl/ts/examples/index")
}
const projects: { [index: string]: Project } = {
  '0': {
    id: '0',
    name: 'Simple triangle',
    source: 'Example001'
  },
  '1': {
    id: '1',
    name: 'Pixel canvas',
    source: 'Example002'
  },
  '2': {
    id: '2',
    name: 'Rectangle function',
    source: 'Example003'
  }
};
const projectId = ref<keyof typeof projects>('1')
onMounted(() => {
  const query = route.query;
  const newProject = Object.values(projects).find((project) => project.source == query.source)
  if (newProject) {
    projectId.value = +newProject.id
    console.log(projectId.value)
    return;
  }
})
const project = computed(() => {
  return projects[projectId.value]
})
const route = useRoute()
function navigate() {
  navigateTo({
    query: {
      source: project.value.source,
    }
  })
}
watch(() => route.query, (query) => {
  const newProject = Object.values(projects).find((project) => project.source == query.source)
  if (newProject) {
    projectId.value = +newProject.id
  }
})
definePageMeta({
  layout: 'webgl',
});
</script>
