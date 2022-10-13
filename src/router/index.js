import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [{
        path: '',
        name: 'home',
        component: HomeView
    },
    {
        path: '/standart',
        name: 'standart',
        component: () =>
            import ('../views/StandartGen.vue')
    },
    {
        path: '/multi',
        name: 'multi',
        component: () =>
            import ('../views/MultiGen.vue')
    },
    {
        path: '/mixed',
        name: 'mixed',
        component: () =>
            import ('../views/MixedGen.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router