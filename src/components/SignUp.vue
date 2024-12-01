<template>
  <form @submit.prevent="onSubmit" class="max-w-2xl mx-auto space-y-4 bg-white p-6 rounded-lg shadow-sm">
    <h1 class="text-2xl mb-6 text-center">sign up</h1>

    <div class="flex flex-col gap-2">
      <InputText
          v-model="formData.name"
          placeholder="Your Name"
          class="!w-full"
      />
    </div>

    <div class="flex flex-col gap-2">
      <InputText
          v-model="formData.phone"
          placeholder="+41 79 123 45 67"
          class="!w-full"
      />
    </div>

    <div class="flex flex-col gap-2">
      <span class="text-gray-600">Address (if there is one)</span>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputText
            v-model="formData.postalCode"
            placeholder="Postal Code"
            class="!w-full"
        />
        <InputText
            v-model="formData.country"
            placeholder="Country"
            class="!w-full"
        />
      </div>
    </div>

    <div class="flex flex-col gap-2">
      <span class="text-gray-600">What are you interested in?</span>
      <div class="flex flex-wrap gap-2">
        <div
            v-for="interest in availableInterests"
            :key="interest"
            @click="toggleInterest(interest)"
            class="cursor-pointer"
        >
          <Chip
              :label="interest"
          />
        </div>
      </div>
    </div>

    <div class="gap-4">
      <Button
          type="submit"
          label="add idea"
          severity="primary"
          class="!w-full"
          rounded
      />
    </div>


    <Toast />
  </form>
</template>

<script>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import Chip from 'primevue/chip';

export default {
  name: 'Signup',
  components: {
    InputText,
    Button,
    Toast,
    Chip
  },
  data() {
    return {
      formData: {
        name: '',
        phone: '',
        postalCode: '',
        country: '',
        interests: []
      },
      availableInterests: [
        'Cinema', 'Traveling', 'Sports', 'Photography', 'Music',
        'Cooking/Baking', 'Technology', 'Art', 'Reading', 'Fitness',
        'Nature', 'Gaming', 'Writing', 'Science', 'Volunteering',
        'Fashion', 'Movies/TV Shows', 'Meditation/Mindfulness',
        'Entrepreneurship', 'Dancing', 'History', 'Theater',
        'Chess', 'Animals', 'Yoga', 'Pilates', 'Caffee'
      ]
    };
  },
  methods: {
    toggleInterest(interest) {
      const index = this.formData.interests.indexOf(interest);
      if (index === -1) {
        this.formData.interests.push(interest);
      } else {
        this.formData.interests.splice(index, 1);
      }
    },
    isSelected(interest) {
      return this.formData.interests.includes(interest);
    },
    onSubmit() {
      this.$toast.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Your signup was successful!',
        life: 3000
      });
    }
  }
};
</script>