import './assets/main.css'
import App from './App.vue'
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { definePreset } from "@primevue/themes"
import router from "@/router/index.js"

const MeetsyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '#E6F2FF',
            100: '#CCE4FF',
            200: '#99CAFF',
            300: '#66AFFF',
            400: '#3395FF',
            500: '#0779FF',  // This is your main primary color
            600: '#0061CC',
            700: '#004999',
            800: '#003166',
            900: '#001833',
            950: '#000C1A'
        }
    }
})

const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: MeetsyPreset,
        options: {
            prefix: 'p',
            darkModeSelector: false
        }
    }
})
app.use(router)
app.mount('#app')