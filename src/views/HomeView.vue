<template>
  <Header />
  <section
    class="bg-light py-5 d-flex justify-content-center align-items-center"
  >
    <div>
      <div class="d-flex justify-content-center">
        <img
          src="../assets/profile.jpg"
          alt="profile.jpg"
          class="rounded-circle"
        />
      </div>
      <h2 class="text-center mt-5">Krisna Juan Fernando</h2>
      <h5 class="text-center">Student at Dinamika University</h5>
    </div>
  </section>
  <section class="bg-white py-5">
    <h2 class="text-center">About</h2>
    <p class="text-center">
      Hi, i am <strong>Krisna Jufer</strong>. i live at
      <strong>Surabaya</strong>, indonesia.
    </p>
    <p class="text-center">
      Not <strong>Web Enthusiast</strong>. Just hobby learn something new.
    </p>
    <p class="text-center"><strong>Since 2022.</strong></p>
  </section>
  <section class="bg-light py-5">
    <h2 class="text-center">Project</h2>
    <div class="container py-2">
      <div class="row">
        <div class="col-lg" v-for="project in projects">
          <RouterLink
            :to="'/detail/' + project.slug"
            class="text-decoration-none text-dark"
          >
            <div class="card">
              <img src="https://picsum.photos/100/100" class="card-img-top" />
              <div class="card-body">
                <h5 class="text-center text-capitalize">
                  {{ project.title }}
                </h5>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Header from "../components/Header.vue";
import { RouterLink } from "vue-router";
import { useProjectStore } from "../stores/project";

const { projects } = useProjectStore();
</script>
