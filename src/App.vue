<script>

import Button from 'primevue/button';
import HomePage from "@/components/HomePage.vue";
import EventList from "@/components/EventList.vue";

export default {
  components: {
    EventList,
    HomePage,
    Button
  }
}
</script>

<template>
  <HomePage id="home"/>
  <EventList id="events"/>

</template>

<style>
html {
  scroll-behavior: smooth;
}

</style>
