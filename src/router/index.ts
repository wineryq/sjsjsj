import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VDSView from '../views/VDSView.vue'
import PhysicalView from '../views/PhysicalView.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/vds',
      name: 'vds',
      component: VDSView
    },
    {
      path: '/vds.html',
      name: 'vds-html',
      component: VDSView
    },
    {
      path: '/physical',
      name: 'physical',
      component: PhysicalView
    },
    {
      path: '/team',
      name: 'team',
      component: NotFound
    },
    {
      path: '/support',
      name: 'support',
      component: NotFound
    },
    {
      path: '/domain',
      name: 'domain',
      component: NotFound
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound
    }
  ]
})

// Prevent default navigation behavior
router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    next({ name: 'not-found' })
  } else {
    next()
  }
})

export default router 