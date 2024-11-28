<script>

import Button from 'primevue/button';
import Image from 'primevue/image';


export default {
  name: "HomePage",
  components: {
    Button,
    Image
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
  <div class="container mx-auto min-h-screen px-2">
    <div class="flex flex-col items-center md:flex-row">
      <Image src="/src/assets/Meetsy.png" alt="Image" width="550" class=""/>
      <div class="flex flex-col items-center md:items-start">
        <h1 class="text-8xl lg:text-9xl text-stone-700">meetsy</h1>
        <h2 class="text-3xl lg:text-3xl text-stone-500 my-6 text-center md:text-left">We help you meet your friends easy</h2>
        <Button label="Get inspiration" severity="Danger" class="mt-10" rounded raised @click="scrollToSection('events')"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>