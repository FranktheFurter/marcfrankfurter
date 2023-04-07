<script>
import feather from "feather-icons"
import ProjectHeader from "../components/projects/ProjectHeader.vue"
import ProjectGallery from "../components/projects/ProjectGallery.vue"
import ProjectInfo from "../components/projects/ProjectInfo.vue"
import ProjectRelatedProjects from "../components/projects/ProjectRelatedProjects.vue"
import projectData from "../data/singleProjectTemplate.json"

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
      projectData,
    }
  },
  async created() {
    feather.replace()
  },
  updated() {
    feather.replace()
  },
  methods: {},
}
</script>

<template>
  <div class="container mx-auto mt-10 sm:mt-20">
    <!-- Project header -->
    <ProjectHeader
      v-if="projectData.singleProjectHeader"
      :singleProjectHeader="projectData.singleProjectHeader"
    />

    <!-- Project gallery -->
    <ProjectGallery
      v-if="projectData.projectImages"
      :projectImages="projectData.projectImages"
    />

    <!-- Project information -->
    <ProjectInfo
      v-if="projectData.projectInfo"
      :projectInfo="projectData.projectInfo"
    />

    <!-- Project related projects -->
    <ProjectRelatedProjects
      v-if="projectData.relatedProject"
      :relatedProject="projectData.relatedProject"
    />
  </div>
</template>

<style scoped></style>
