<script>
import MessageBubbleRight from "@/components/MessageBubbleRight.vue";
import MessageBubbleLeft from "@/components/MessageBubbleLeft.vue";
import Paginator from 'primevue/paginator';

export default {
  name: "EventList",
  components: {
    MessageBubbleLeft,
    MessageBubbleRight,
    Paginator
  },
  data() {
    return {
      messageBubbleList: []
    }
  },
  mounted() {
    this.fetchEvents()
  },
  methods: {
    async fetchEvents() {
      try {
        console.log('Fetching from:', `${import.meta.env.VITE_API_URL}/getAllMessageBubbleData`);
        const response = await fetch(`${import.meta.env.VITE_API_URL}/getAllMessageBubbleData`)
        if (!response.ok) throw new Error('Failed to fetch events')
        this.messageBubbleList = await response.json()
      } catch (error) {
        console.error('Error fetching events:', error)
      }
    }
  }
}
</script>

<template>
  <div class="container mx-auto min-h-screen">
    <div id="events" class="pt-5 px-5">
      <template v-for="(message, index) in messageBubbleList" :key="message.id">
        <MessageBubbleRight
            v-if="index % 2 === 0"
            :message="message.description"
        />
        <MessageBubbleLeft
            v-else
            :message="message.description"
        />
      </template>
    </div>
  </div>
</template>

<style scoped>

</style>