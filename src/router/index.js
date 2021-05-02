import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/team',
    name: 'Team',

    component: () => import('../views/Team.vue')
  },
  // {
  //   path: '/add',
  //   name: 'AddProduct',
  //   component: () => import('../views/AddProduct.vue')
  // },
  // {
  //   path: '/edit',
  //   name: 'EditProduct',
  //   component: () => import( '../views/EditProduct.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
