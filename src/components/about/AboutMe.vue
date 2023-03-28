<script>
export default {
  setup() {
    return {
      bios: [
        {
          id: 1,
          bio:
              "Greetings, my name is Marc Frankfurter, and I am a highly motivated front-end developer and designer with a passion for technology. My fascination with computers and their inner workings began at a young age, and by the age of 12, I was already delving into programming, creating new characters and abilities for a favorite computer game.",
        },
        {
          id: 2,
          bio:
              "After completing my academic journey with a degree in computer engineering from Ulm, I decided to specialize in usability engineering and UI development. My first post-graduation role was as a UX designer, where I was able to refine my design skills and gain valuable experience. However, my love for the technical aspects of development eventually led me to transition into a development-focused role.",
        },
        {
          id: 3,
          bio:
              'I am an avid tinkerer and enjoy engaging in conversations with my team on a wide range of technical topics. Watching a system come together and witnessing the seamless integration of individual parts is one of the most beautiful aspects of both programming and designing.',
        },
      ],
    };
  },
};
</script>

<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <!-- About profile image -->
    <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
      <img src="@/assets/images/profile.jpeg" class="rounded-xl w-96" alt=""/>
    </div>

    <!-- About details -->
    <div class="w-full sm:w-3/4 text-left">
      <p v-for="bio in bios" :key="bio.id"
         class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg">
        {{ bio.bio }}
      </p>
    </div>
  </div>
</template>
