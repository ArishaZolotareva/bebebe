// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        component: () => import('@/components/Main.vue'),

      },
      {
        path: 'contacts',
        component: () => import('@/components/Contacts.vue'),
      },
      {
      path: 'catalog',
        component: () => import('@/components/Catalog.vue'),
      },
      {
        path: 'flys',
        component: () => import('@/components/Flys.vue')
      },
      {
        path: 'price',
        component: () => import('@/components/Price.vue')
      },    
      {
        path: 'admine',
        component: () => import('@/components/Admine.vue')
      }

    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
