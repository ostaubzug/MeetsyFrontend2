<script>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Textarea from 'primevue/textarea';
import Message from 'primevue/message';
import Toast from 'primevue/toast';

export default {
  name: 'AddEvent',
  components: {
    InputText,
    Button,
    Textarea,
    Message,
    Toast
  },
  data() {
    return {
      formData: {
        location: '',
        time: '',
        message: ''
      },
      errors: {}
    };
  },
  methods: {
    validateForm() {
      this.errors = {};

      if (!this.formData.message) {
        this.errors.message = 'Eine Nachricht wird benötigt.';
        return false;
      }

      return true;
    },
    onSubmit() {
      if (this.validateForm()) {
        this.$toast.add({
          severity: 'success',
          summary: 'Form Submitted',
          detail: 'Your message has been sent',
          life: 3000
        });
      }
    }
  }
};
</script>

<template>
  <form @submit.prevent="onSubmit" class="max-w-2xl mx-auto space-y-4 bg-white p-6 rounded-lg shadow-sm">
    <div class="flex flex-col gap-2">
      <InputText
          v-model="formData.location"
          placeholder="Ort"
          class="!w-full"
      />
    </div>

    <div class="flex flex-col gap-2">
      <InputText
          v-model="formData.time"
          placeholder="Zeit"
          class="!w-full"
      />
    </div>

    <div class="flex flex-col gap-2">
      <Textarea
          v-model="formData.message"
          placeholder="Nachricht"
          :rows="5"
          class="!w-full"
          :class="{ 'p-invalid': errors.message }"
      />
      <Message
          v-if="errors.message"
          severity="error"
          :text="errors.message"
      />
    </div>

    <Button
        type="submit"
        label="Submit"
        severity="primary"
        class="!w-full"
        rounded raised
    />

    <Toast />
  </form>
</template>