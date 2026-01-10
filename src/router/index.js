import { createRouter, createWebHistory, START_LOCATION } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import LoginView from '@/views/auth/LoginView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import ToursView from '@/views/ToursView.vue'
import DashboardView from '@/views/DashboardView.vue'
import { useUserStore } from '@/store/user.js'
import TravelCreate from '@/views/TravelCreate.vue'
import TravelUpdate from '@/views/TravelUpdate.vue'
import TourCreate from '@/views/TourCreate.vue'

const routes = [
  {
    name: 'Login',
    path: '/login',
    component: LoginView,
    meta: { auth: false },
  },
  {
    name: 'Register',
    path: '/register',
    component: RegisterView,
    meta: { auth: false },
  },
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        name: 'Dashboard',
        path: '',
        component: DashboardView,
        meta: { auth: false },
      },
      {
        name: 'Create Travel',
        path: 'travels/create',
        component: TravelCreate,
        meta: {
          auth: true,
          roles: ['admin'],
        },
      },
      {
        name: 'Tours',
        path: 'travels/:slug/tours',
        component: ToursView,
        meta: { auth: false },
      },
      {
        name: 'Create Tour',
        path: 'travels/:id/tours/create',
        component: TourCreate,
        meta: {
          auth: true,
          roles: ['admin'],
        },
      },
      {
        name: 'Update Travel',
        path: 'travels/:id/edit',
        component: TravelUpdate,
        meta: {
          auth: true,
          roles: ['editor'],
        },
      },

    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView,
    meta: { auth: false },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore();

  // Fetch user in pinia store from start location
  if (from === START_LOCATION) {
    await userStore.getUser();
  }

  // If Authenticated user tries to access Login or Register - go to /
  if ((to.name === 'Login' || to.name === 'Register') && userStore.isAuthorized) {
    return next('/')
  }

  // If route is guarded with auth and user is Unauthorized - go to /login
  if (to.meta.auth && !userStore.isAuthorized) {
    return next('/login')
  }

  // If route is guarded by roles
  if (to.meta.roles){
    // If route is guarded with Admin role and user didn't pass - go to /
    if (to.meta.roles.includes('admin') && !userStore.isAdmin){
      return next('/')
    }

    // If route is guarded with Admin role and user didn't pass - go to /
    if (to.meta.roles.includes('editor') && !userStore.isEditor){
      return next('/')
    }
  }

  next()
})

export async function routerPush(name, params) {
  if (params === undefined) {
    return await router.push({ name })
  } else {
    return await router.push({ name, params })
  }
}
export default router
