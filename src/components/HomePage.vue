<script>

import Button from 'primevue/button';

export default {
  name: "HomePage",
  components: {
    Button
  }
}
</script>

<template>
  <div class="flex flex-nowrap">
    <h1 class="text-9xl text-stone-700" >meetsy</h1>
    <h2>We help you meet your friends easy</h2>
    <Button label="Click me" severity="Danger" rounded raised/>

  </div>
</template>

<style scoped>

</style>