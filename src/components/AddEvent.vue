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

      if (!this.formData.message.trim()) {
        this.errors.message = 'Die Nachricht wird benötigt.';
        return false;
      }

      return true;
    },
    async onSubmit() {
      if (this.validateForm()) {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/addProposedMessageBubbleData`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              location: this.formData.location,
              description: this.formData.message,
              time: this.formData.time
            })
          });

          if (response.ok) {
            this.$toast.add({
              severity: 'success',
              summary: 'Erfolgreich',
              detail: 'Ihr neuer Event wird überprüft und bald veröffentlicht.',
              life: 3000
            });
            this.formData.location = '';
            this.formData.time = '';
            this.formData.message = '';
          } else {
            this.$toast.add({
              severity: 'error',
              summary: 'Fehler',
              detail: 'Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.',
              life: 3000
            });
          }
        } catch (error) {
          console.error('Error submitting form:', error);
          this.$toast.add({
            severity: 'error',
            summary: 'Fehler',
            detail: 'Ein Netzwerkfehler ist aufgetreten. Bitte überprüfen Sie Ihre Verbindung.',
            life: 3000
          });
        }
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
      <small class="text-red-500 font-medium" v-if="errors.message">
        {{ errors.message }}
      </small>
    </div>

    <Button
        type="submit"
        label="Submit"
        severity="primary"
        class="!w-full"
        rounded
    />

    <Toast/>
  </form>
</template>