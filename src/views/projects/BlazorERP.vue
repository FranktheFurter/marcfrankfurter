<script>
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectGallery from '../../components/projects/ProjectGallery.vue';
import ProjectInfo from '../../components/projects/ProjectInfo.vue';
// import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

export default {
  name: 'BlazorERP',
  components: {
    ProjectHeader,
    ProjectGallery,
    ProjectInfo,
    // ProjectRelatedProjects,
  },
  data: () => {
    return {
      singleProjectHeader: {
        singleProjectTitle: 'Blazor Server ERP-System',
        singleProjectDate: 'Jul 2022 - Now',
        singleProjectTag: 'UI / Frontend',
      },
      projectImages: [
        {
          id: 1,
          title: 'Blazor-ERP',
          img: require('@/assets/images/erp-content-1.png'),
        },
        {
          id: 2,
          title: 'Blazor-ERP',
          img: require('@/assets/images/erp-content-2.png'),
        },
        {
          id: 3,
          title: 'Blazor-ERP',
          img: require('@/assets/images/erp-content-3.png'),
        },
      ],
      projectInfo: {
        clientHeading: 'About Client',
        companyInfos: [
          {
            id: 1,
            title: 'Name',
            details: 'Scheppach GmbH',
          },
          {
            id: 2,
            title: 'Services',
            details: 'UI Design & Frontend Development',
          },
          {
            id: 3,
            title: 'Website',
            details: 'https://www.scheppach.com/de',
          },
        ],
        objectivesHeading: 'Objective',
        objectivesDetails:
            'The previous ERP system MyFactory was to be gradually replaced by a new ERP system developed in-house based on Blazor Server.',
        technologies: [
          {
            title: 'Tools & Technologies',
            techs: [
              'HTML',
              'CSS',
              'JavaScript',
              'Blazor',
              'C#',
              'Figma',
            ],
          },
        ],
        projectDetailsHeading: 'Challenge',
        projectDetails: [
          {
            id: 1,
            details:
                'Since both the old system MyFactory and the new system are to be operated in parallel, they must be compatible with each other and data must be stored in the same backend.',
          },
          {
            id: 2,
            details:
                'Users must be able to log in via Active Directory and are assigned various user rights via login',
          },
          {
            id: 3,
            details:
                'With Blazor and the .Net stack a lot is possible, but to manipulate the DOM directly you have to work with Javascript interop.',
          },
          {
            id: 4,
            details:
                'Given the large number of possible operations that an ERP system offers, it is very important to integrate these carefully into a UI so that users do not feel overwhelmed by the sheer abundance and the system can be operated intuitively.',
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
