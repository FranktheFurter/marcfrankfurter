<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						"Hello my name is Marc Frankfurter, I am a passionate front end developer and designer. Ever since I was 5 years old I have been interested in computers and how they work. My first programming experience was at the age of 12 when I developed new characters and abilites for a computer game I liked to play at that time.After my school career I studied computer engineering in Ulm with focus on usability engineering and UI development.",
				},
				{
					id: 2,
					bio:
						"After my studies I gained experience as a UX designer and was able to refine my design skills. Eventually I moved into development because I enjoyed the deeper technical level more.",
				},
				{
					id: 3,
					bio:
						'I am a passionate tinkerer. I always like to exchange ideas with my team about technical topics. When programming or designing, the most beautiful thing is to see how the system grows and the individual parts come together.',
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
			<img src="@/assets/images/profile.jpeg" class="rounded-xl w-96" alt="" />
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
