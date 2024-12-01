<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <div class="max-w-4xl mx-auto bg-white shadow-md">
      <Navbar/>
      <RouterView/>
    </div>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>