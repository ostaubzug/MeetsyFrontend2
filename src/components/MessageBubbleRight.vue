<script>
import Button from 'primevue/button';
import 'primeicons/primeicons.css'

export default {
  name: "MessageBubbleRight",
  components: {
    Button
  },
  props: {
    message: {
      type: String,
      required: true,
      default: ''
    }
  },
  methods: {
    copyText() {
      navigator.clipboard.writeText(this.message)
    }
  }
}
</script>

<template>
  <div class="px-4">
    <div class="flex flex-col items-end">  <!-- Added wrapper div -->
      <div class="chat-bubble-container">
        <div class="chat-bubble">
          {{ message }}
        </div>
      </div>
      <Button @click="copyText" icon="pi pi-copy" variant="text"/>
    </div>
  </div>
</template>

<style scoped>
.chat-bubble-container {
  display: flex;
  justify-content: flex-end;
}

.chat-bubble {
  max-width: 60%;
  padding: 10px 15px;
  background-color: #34c759;
  color: white;
  border-radius: 20px;
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.4;
  margin: 10px 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
}

.chat-bubble::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 30px; /* Changed from left to right */
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-top-color: #34c759;
  border-bottom: 0;
  margin-bottom: -10px;
}
</style>