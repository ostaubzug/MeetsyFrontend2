<script>
export default {
  name: "Navbar",
  data() {
    return {
      isOpen: false
    }
  }
}
</script>

<template>
  <nav class="px-6 py-4 flex justify-between items-center border-b relative">
    <div>
      <router-link to="/" class="text-xl font-semibold text-gray-800 hover:text-gray-600">
        meetsy
      </router-link>
    </div>

    <button
        @click="isOpen = !isOpen"
        class="md:hidden"
    >
      <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
      >
        <path
            v-if="!isOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
        />
        <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <div class="hidden md:flex gap-6 items-center">
      <router-link
          to="/AddEvent"
          class="text-gray-600 hover:text-gray-800 transition-colors"
      >
        add idea
      </router-link>

      <router-link
          to="/AboutUs"
          class="text-gray-600 hover:text-gray-800 transition-colors"
      >
        about us
      </router-link>

      <router-link
          to="/Signup"
          class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        sign up
      </router-link>
    </div>

    <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 transform -translate-y-2"
        enter-to-class="opacity-100 transform translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 transform translate-y-0"
        leave-to-class="opacity-0 transform -translate-y-2"
    >
      <div
          v-show="isOpen"
          class="md:hidden bg-gray-50 border-b shadow-sm absolute top-full left-0 right-0 w-full z-50"
      >
        <div class="px-4 py-2 space-y-3">
          <router-link
              to="/AddEvent"
              class="block text-gray-600 hover:text-gray-800 transition-colors py-2 border-b border-gray-200"
              @click="isOpen = false"
          >
            add idea
          </router-link>

          <router-link
              to="/AboutUs"
              class="block text-gray-600 hover:text-gray-800 transition-colors py-2 border-b border-gray-200"
              @click="isOpen = false"
          >
            about us
          </router-link>

          <router-link
              to="/Signup"
              class="block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              @click="isOpen = false"
          >
            sign up
          </router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>