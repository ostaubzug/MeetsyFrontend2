<script>

import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
import { ref } from "vue";
import router from "@/router/index.js";

const items = ref([
  {
    label: "meetsy",
    command:() => {
      router.push("/");
    },
  },
    {
    label: "add idea",
    command:() => {
      router.push("/AddEvent");
    },
  },
  {
    label: "about us",
    command:() => {
      router.push("/AboutUs");
    },
  },
  {
    label: "sign up",
    command:() => {
      router.push("/Signup");
    },
  },
]);

export default {
  components: {
    Button,
    Menubar,
  },
  setup() {
    return {
      items,
    };
  },
}
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <div class="max-w-4xl mx-auto bg-white shadow-md">
      <Menubar :model="items"></Menubar>
      <RouterView />
    </div>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

</style>
