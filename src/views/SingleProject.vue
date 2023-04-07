<script>
import feather from "feather-icons";
import ProjectHeader from "../components/projects/ProjectHeader.vue";
import ProjectGallery from "../components/projects/ProjectGallery.vue";
import ProjectInfo from "../components/projects/ProjectInfo.vue";
import ProjectRelatedProjects from "../components/projects/ProjectRelatedProjects.vue";
import projects from "../data/projects";

export default {
  name: "Projects",
  components: {
    ProjectHeader,
    ProjectGallery,
    ProjectInfo,
    ProjectRelatedProjects,
  },
  data: () => {
    return {
      project: null,
    };
  },
  watch: {
    "$route.params.id": {
      immediate: true,
      handler(newId) {
        const projectId = parseInt(newId);
        this.project = projects.find((project) => project.id === projectId);
        feather.replace();
      },
    },
  },
  methods: {},
};
</script>

<template>
  <div class="container mx-auto mt-10 sm:mt-20">
    <!-- Project header -->
    <ProjectHeader
      v-if="project.title"
      :title="project.title"
      :category="project.category"
      :date="project.date"
    />

    <!-- Project gallery -->
    <ProjectGallery
      v-if="project.projectData.projectImages"
      :projectImages="project.projectData.projectImages"
    />

    <!-- Project information -->
    <ProjectInfo
      v-if="project.projectData.projectInfo"
      :projectInfo="project.projectData.projectInfo"
    />

    <!-- Project related projects -->
    <ProjectRelatedProjects
      :category="project.category"
      :parentId="project.id"
    />
  </div>
</template>

<style scoped></style>
