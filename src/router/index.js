import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/binding',
    name: 'binding',
    component: () => import('@/views/DataBinding.vue')
  },
  {
    path: '/bindingList',
    name: 'bindingList',
    component: () => import('@/views/DataBindingList.vue')
  },
  {
    path: '/nestedComponent',
    name: 'nestedComponent',
    component: () => import('@/views/NestedComponent')
  },
  {
    path: '/test/app_bar_first',
    name: 'app_bar_first',
    component: () => import('@/components/test/app-bar-first')
  },
  {
    path: '/test/wireframe_inbox',
    name: 'wireframe_inbox',
    component: () => import('@/components/test/wireframe-inbox')
  },
  {
    path: '/test/mdn_detail',
    name: 'mdn_detail',
    component: () => import('@/components/test/mdn-detail')
  },
  {
    path: '/test/navigation_bar',
    name: 'navigation_bar',
    component: () => import('@/components/test/navigation-bar')
  },
  {
    path: 'test/component_test',
    name: 'component_test',
    component: () => import('@/components/test/component-test.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
