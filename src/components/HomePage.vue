<script>

import Button from 'primevue/button';
import Image from 'primevue/image';
import EventList from "@/components/EventList.vue";
import meetsynImage from '@/assets/Meetsy.png'


export default {
  name: "HomePage",
  components: {
    Button,
    Image,
    EventList
  },
  data() {
    return {
      imagePath: meetsynImage,
    }
  },

  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  }

}
</script>

<template>
  <div class="container mx-auto min-h-screen px-2 md:px-14 flex items-start md:items-center pt-10 md:pt-0">
    <div class="flex flex-col items-center md:flex-row md:gap-8 md:justify-center md:w-full">
      <Image :src="imagePath" alt="Image" width="550" class="mb-4 md:mb-0"/>
      <div class="flex flex-col items-center md:items-start">
        <h1 class="text-8xl lg:text-9xl text-stone-700">meetsy</h1>
        <h2 class="text-3xl lg:text-3xl text-stone-500 my-6 text-center md:text-left">We help you meet your friends
          easy</h2>
        <Button label="Get inspiration" severity="primary" class="mt-4 md:mt-10" rounded raised
                @click="scrollToSection('events')"/>
      </div>
    </div>
  </div>

  <EventList id="events"/>
</template>

<style scoped>
body {
  background: url("/src/assets/background.svg") no-repeat center center fixed;
  background-size: cover;
}
</style>