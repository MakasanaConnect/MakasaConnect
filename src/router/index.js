import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../components/LandingPage.vue'
import RegistrationPage from '../components/RegistrationPage.vue'
import LoginPage from '../components/LoginPage.vue'

Vue.use(VueRouuter)

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
    }
]

const router = new VueRouter({
    routes
})

export default router