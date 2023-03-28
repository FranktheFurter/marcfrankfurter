<script>
import AboutClientSingle from './AboutClientSingle.vue';

export default {
  components: {
    AboutClientSingle,
  },
  data: () => {
    return {
      clientsHeading: 'Some of the brands I have worked with',
      clients: [
        {
          id: 1,
          title: 'Amazon',
          img: require('@/assets/images/brands/brand-5.png'),
        },
        {
          id: 2,
          title: 'Porsche',
          img: require('@/assets/images/brands/brand-4.png'),
        },
        {
          id: 3,
          title: 'Vinfast',
          img: require('@/assets/images/brands/brand-6.png'),
        },
        {
          id: 4,
          title: 'VW',
          img: require('@/assets/images/brands/brand-3.png'),
        },
        {
          id: 5,
          title: 'Scheppach',
          img: require('@/assets/images/brands/brand-2.png'),
        },
        {
          id: 6,
          title: 'Elektrobit',
          img: require('@/assets/images/brands/brand-1.png'),
        },
      ],
    };
  },
};
</script>

<template>
  <div class="mt-10 sm:mt-20">
    <p
        class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
    >
      {{ clientsHeading }}
    </p>
    <div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
      <AboutClientSingle
          v-for="client in clients"
          :key="client.id"
          :client="client"
      />
    </div>
  </div>
</template>
