<template>
  <Header />
  <h1>{{ currentProject.title }}</h1>
</template>

<script setup>
import Header from "../components/Header.vue";
import { useProjectStore } from "../stores/project";
import { ref } from "vue";
import { useRoute } from "vue-router";

const { projects } = useProjectStore();
const route = useRoute();

const currentProject = ref(
  projects.find((project) => project.slug == route.params.slug)
);
</script>
