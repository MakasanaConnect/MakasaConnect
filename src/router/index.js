import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../components/LandingPage.vue'
import RegistrationPage from '../components/RegistrationPage.vue'
import LoginPage from '../components/LoginPage.vue'
import ConfirmPage from '@/components/ConfirmPage.vue'


const routes = [
    {
        path: '/',
        name: 'Landing',
        component: LandingPage
    },
    {
        path: '/register',
        name: 'Register',
        component: RegistrationPage
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage
    },
    {
        path: '/ConfirmPage',
        name: 'Confirm',
        component: ConfirmPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
