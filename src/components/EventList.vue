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
      messageBubbleList: [],
      first: 0,
      rows: 15
    }
  },
  computed: {
    paginatedMessages() {
      return this.messageBubbleList.slice(this.first, this.first + this.rows);
    },
    totalMessages() {
      return this.messageBubbleList.length;
    }
  },
  mounted() {
    this.fetchEvents()
  },
  methods: {
    async fetchEvents() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/getAllMessageBubbleData`, {
          headers: {
            'Content-Type': 'application/json',
          }
        });
        if (!response.ok) throw new Error('Failed to fetch events')
        this.messageBubbleList = await response.json()
      } catch (error) {
        console.error('Error fetching events:', error)
      }
    },
    onPageChange(event) {
      this.first = event.first;
      this.rows = event.rows;
    }
  }
}
</script>

<template>
  <div class="container mx-auto min-h-screen">
    <div id="events" class="pt-5 px-5">
      <template v-for="(message, index) in paginatedMessages" :key="message.id">
        <MessageBubbleRight
            v-if="index % 2 === 0"
            :message="message.description"
            :location="message.location"
            :time="message.time"
        />
        <MessageBubbleLeft
            v-else
            :message="message.description"
            :location="message.location"
            :time="message.time"
        />
      </template>

      <div class="mt-5 pb-14">
        <Paginator
            v-model:first="first"
            v-model:rows="rows"
            :totalRecords="totalMessages"
            template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            @page="onPageChange"
            class="p-paginator-bottom"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>