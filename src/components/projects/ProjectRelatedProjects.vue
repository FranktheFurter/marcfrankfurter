<script>
import projects from "../../data/projects";
export default {
  props: {
    category: String,
    parentId: Number,
  },
  computed: {
    filteredProjects() {
      return projects.filter(
        (project) =>
          project.category === this.category && project.id !== this.parentId
      );
    },
  },
};
</script>

<template>
  <div
    v-if="filteredProjects.length > 0"
    class="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark"
  >
    <p
      class="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left"
    >
      Related projects of the same category
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-4 gap-10">
      <router-link
        v-for="project in filteredProjects"
        :key="project.id"
        :to="'/project/' + project.id"
        class="block"
      >
        <img
          :src="project.img"
          class="rounded-xl cursor-pointer"
          :alt="project.title"
        />
      </router-link>
    </div>
  </div>
</template>
