<script>

import Button from 'primevue/button';
import HomePage from "@/components/HomePage.vue";
import EventList from "@/components/EventList.vue";
import Menubar from 'primevue/menubar';


export default {
  components: {
    EventList,
    HomePage,
    Button,
    Menubar
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <div class="max-w-4xl mx-auto bg-white shadow-md">
      <Menubar :model="items" />
      <HomePage id="home"/>
      <EventList id="events"/>
    </div>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

</style>
