<script>
import Button from 'primevue/button';
import 'primeicons/primeicons.css'


export default {
  name: "MessageBubbleLeft",
  components:{
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
  <div class="container m-5 mt-10 max-w-xl md:justify-center">
    <div class="chat-bubble-container">
      <div class="flex flex-col">
        <div class="chat-bubble">
          <p>{{ message }}</p>
          <p><strong>Ort :</strong> {{ location }}</p>
          <p><strong>Zeit :</strong> {{ time }}</p>
        </div>
        <Button @click="copyText" icon="pi pi-copy" variant="text" />
      </div>
    </div>
  </div>
</template>


<style scoped>
.chat-bubble-container {
  display: flex;
  justify-content: flex-start;  /* Changed from flex-end to flex-start */
}

.chat-bubble {
  max-width: 60%;
  padding: 10px 15px;
  background-color: #0479ff;
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
  left: 30px;  /* Changed from right to left */
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-top-color: #0479ff;  /* Changed to match bubble color */
  border-bottom: 0;
  margin-bottom: -10px;
}
</style>
