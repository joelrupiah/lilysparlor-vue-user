import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../components/pages/Home.vue')
    },
    {
      path: '/shop',
      name: 'Shop',
      component: () => import('../components/pages/shop/Shop.vue')
    },
    {
      path: '/wishlist',
      name: 'Wishlist',
      component: () => import('../components/pages/wishlist/Wishlist.vue')
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../components/pages/cart/Cart.vue')
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: () => import('../components/pages/checkout/Checkout.vue')
    },
  ]
})

export default router
