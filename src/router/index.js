import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import LoginView from '@/views/auth/LoginView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import ToursView from '@/views/ToursView.vue'
import DashboardView from '@/views/DashboardView.vue'
import { useUserStore } from '@/store/user.js'

const routes = [
  {
    name: 'Login',
    path: '/login',
    component: LoginView,
    beforeEnter: (to, from, next) => {
      const user = useUserStore()
      user.isAuthorized.value ? next('/') : next()
    },
  },
  {
    name: 'Register',
    path: '/register',
    component: RegisterView,
    beforeEnter: (to, from, next) => {
      const user = useUserStore()
      user.isAuthorized.value ? next('/') : next()
    },
  },
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        name: 'Dashboard',
        path: '/',
        component: DashboardView
      },
      {
        name: 'Tours',
        path: 'tours',
        component: ToursView
      },
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export async function routerPush(name, params) {
  if (params === undefined) {
    return await router.push({ name })
  } else {
    return await router.push({ name, params })
  }
}
export default router
