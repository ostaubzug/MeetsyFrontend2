<script>
import MessageBubbleRight from "@/components/MessageBubbleRight.vue";
import MessageBubbleLeft from "@/components/MessageBubbleLeft.vue";
import Paginator from 'primevue/paginator';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

export default {
  name: "EventList",
  components: {
    MessageBubbleLeft,
    MessageBubbleRight,
    Paginator,
    InputText,
    Button
  },
  data() {
    return {
      messageBubbleList: [],
      first: 0,
      rows: 15,
      locationFilter: '',
      isFilterVisible: false
    }
  },
  computed: {
    filteredMessages() {
      return this.messageBubbleList.filter(message =>
          message.location.toLowerCase().includes(this.locationFilter.toLowerCase())
      );
    },
    paginatedMessages() {
      return this.filteredMessages.slice(this.first, this.first + this.rows);
    },
    totalMessages() {
      return this.filteredMessages.length;
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
      setTimeout(() => {
        document.getElementById('events').scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 0);
    },
    toggleFilter() {
      this.isFilterVisible = !this.isFilterVisible;
      if (!this.isFilterVisible) {
        this.locationFilter = '';
      }
    }
  }
}
</script>

<template>
  <div class="container mx-auto min-h-screen">
    <div id="events" class="pt-5 px-5">
      <div>
        <div class="flex justify-content-end align-items-center gap-2 pb-8">
          <div class="flex align-items-center gap-2 ml-auto">
            <transition name="fade">
              <InputText
                  v-if="isFilterVisible"
                  v-model="locationFilter"
                  placeholder="Filtere den Ort"
                  class="w-12rem"
                  @blur="!locationFilter && toggleFilter()"
              />
            </transition>
            <Button
                icon="pi pi-filter"
                rounded
                text
                severity="secondary"
                aria-label="Filter"
                @click="toggleFilter"
            />
          </div>
        </div>


      </div>


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
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  width: 0;
}
</style>
