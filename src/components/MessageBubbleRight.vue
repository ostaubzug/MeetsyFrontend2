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
    },
    time: {
      type: String,
      required: true,
      default: ''
    },
    location: {
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
    <div class="flex flex-col items-end">
      <div class="flex flex-col items-end w-full sm:w-auto">  <!-- Added width control -->
        <div class="chat-bubble w-full sm:max-w-[60%]">  <!-- Modified width for mobile -->
          <p>{{ message }}</p>
          <p><strong>Ort :</strong> {{ location }}</p>
          <p><strong>Zeit :</strong> {{ time }}</p>
        </div>
        <Button @click="copyText" icon="pi pi-copy" variant="text" class="mt-2" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.chat-bubble {
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
  right: 30px;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-top-color: #34c759;
  border-bottom: 0;
  margin-bottom: -10px;
}

</style>