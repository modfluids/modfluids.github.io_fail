import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
        path: '/members',
        name: 'Members',
        component: () => import('../views/MembersView.vue')
    },
    {
        path: '/publications',
        name: 'Publications',
        component: () => import('../views/PublicationsView.vue')
      },
      {
          path: '/news',
          name: 'News',
          component: () => import('../views/NewsView.vue')
      }
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
