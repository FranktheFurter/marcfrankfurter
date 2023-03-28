<script>
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectGallery from '../../components/projects/ProjectGallery.vue';
import ProjectInfo from '../../components/projects/ProjectInfo.vue';
// import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

export default {
  name: 'FlutterGameOfLife',
  components: {
    ProjectHeader,
    ProjectGallery,
    ProjectInfo,
    // ProjectRelatedProjects,
  },
  data: () => {
    return {
      singleProjectHeader: {
        singleProjectTitle: 'Flutter Game of Life',
        singleProjectDate: '2022',
        singleProjectTag: 'Private Project',
      },
      projectImages: [
        {
          id: 1,
          title: 'Flutter Game of Life',
          img: require('@/assets/images/game-of-life-flutter.jpg'),
        },
        {
          id: 2,
          title: 'Flutter Game of Life',
          img: require('@/assets/images/game-of-life-flutter2.jpg'),
        },
        {
          id: 3,
          title: 'Flutter Game of Life',
          img: require('@/assets/images/game-of-life-flutter3.jpg'),
        },
      ],
      projectInfo: {
        clientHeading: 'About',
        companyInfos: [
          {
            id: 1,
            title: 'Website',
            details: 'https://github.com/FranktheFurter/game_of_life_flutter',
          },
        ],
        objectivesHeading: 'Objective',
        objectivesDetails:
            'Game of Life is my "Goto-Project" to learn a new programming language or framework',
        technologies: [
          {
            title: 'Tools & Technologies',
            techs: [
              'Flutter',
            ],
          },
        ],
        projectDetailsHeading: 'About Project',
        projectDetails: [
          {
            id: 1,
            details:
                'I have implemented Game of Life in many languages but I like the Flutter implementation the most. It is very easy to implement and the UI is very responsive. I have also implemented speed slider that allows you to change the speed of the game.',
          },
          {
            id: 2,
            details:
                'You can try it via the link',
          },
        ],
        socialSharingsHeading: 'Share This',
        socialSharings: [
          {
            id: 1,
            name: 'Twitter',
            icon: 'twitter',
            url: 'https://twitter.com/realstoman',
          },
          {
            id: 2,
            name: 'Instagram',
            icon: 'instagram',
            url: 'https://instagram.com/realstoman',
          },
          {
            id: 3,
            name: 'Facebook',
            icon: 'facebook',
            url: 'https://facebook.com/',
          },
          {
            id: 4,
            name: 'LinkedIn',
            icon: 'linkedin',
            url: 'https://linkedin.com/',
          },
          {
            id: 5,
            name: 'Youtube',
            icon: 'youtube',
            url: 'https://www.youtube.com/c/StomanStudio',
          },
        ],
      },
      relatedProject: {
        relatedProjectsHeading: 'Related Projects',
        relatedProjects: [
          {
            id: 1,
            title: 'Mobile UI',
            img: require('@/assets/images/mobile-project-1.jpg'),
          },
          {
            id: 2,
            title: 'Web Application',
            img: require('@/assets/images/web-project-1.jpg'),
          },
          {
            id: 3,
            title: 'UI Design',
            img: require('@/assets/images/ui-project-2.jpg'),
          },
          {
            id: 4,
            title: 'Kabul Mobile App UI',
            img: require('@/assets/images/mobile-project-2.jpg'),
          },
        ],
      },
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
  methods: {},
};
</script>

<template>
  <div class="container mx-auto mt-10 sm:mt-20">
    <!-- Project header -->
    <ProjectHeader :singleProjectHeader="singleProjectHeader"/>

    <!-- Project gallery -->
    <ProjectGallery :projectImages="projectImages"/>

    <!-- Project information -->
    <ProjectInfo :projectInfo="projectInfo"/>

    <!-- Project related projects -->
    <!--    <ProjectRelatedProjects :relatedProject="relatedProject"/>-->
  </div>
</template>

<style scoped></style>
