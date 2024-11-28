import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import AddEvent from "@/components/AddEvent.vue";
import AboutUs from "@/components/AboutUs.vue";
import SignUp from "@/components/SignUp.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/AddEvent',
        name: 'addEvent',
        component: AddEvent
    },
    {
        path: '/AboutUs',
        name: 'aboutUs',
        component: AboutUs
    },
    {
        path: '/SignUp',
        name: 'signup',
        component: SignUp
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router