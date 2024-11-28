<script>
import MessageBubbleRight from "@/components/MessageBubbleRight.vue";
export default {
  name: "EventList",
  components: {
    MessageBubbleRight
  }
}
</script>

<template>
  <div class="container mx-auto min-h-screen">
    <div id="events" class="pt-5">
      <MessageBubbleRight message="Good Morning this is some test message. i try to make this message a bit longer than normal to see how it will behave"/>
    </div>

  </div>
</template>

<style scoped>

</style>