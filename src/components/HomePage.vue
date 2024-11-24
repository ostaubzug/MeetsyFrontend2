<script>

import Button from 'primevue/button';
import Image from 'primevue/image';


export default {
  name: "HomePage",
  components: {
    Button,
    Image
  }
}
</script>

<template>
  <div class="flex flex-col items-center md:flex-row">

    <Image src="/src/assets/Meetsy.png" alt="Image" width="550" class=""/>

    <h1 class="text-9xl text-stone-700" >meetsy</h1>
    <h2 class="text-3xl text-stone-500 my-6">We help you meet your friends easy</h2>
    <Button label="Get inspiration" severity="Danger" class="mt-10" rounded raised/>

  </div>
</template>

<style scoped>

</style>