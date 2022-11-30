import { createRouter, createWebHistory } from 'vue-router'

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: () => import('../components/pages/Home.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../components/pages/about/About.vue')
    },
    {
      path: '/contact-us',
      name: 'Contact',
      component: () => import('../components/pages/contact/Contact.vue')
    },
    {
      path: '/account',
      name: 'Account',
      component: () => import('../components/pages/account/Account.vue'),
      meta: {
        requiresUserAuth: true
      }
    },
    {
      path: '/shop',
      name: 'Shop',
      component: () => import('../components/pages/shop/Shop.vue')
    },
    {
      path: '/wishlist',
      name: 'Wishlist',
      component: () => import('../components/pages/wishlist/Wishlist.vue'),
      meta: {
        requiresUserAuth: true
      }
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../components/pages/cart/Cart.vue'),
      meta: {
        requiresUserAuth: true
      }
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: () => import('../components/pages/checkout/Checkout.vue'),
      meta: {
        requiresUserAuth: true
      }
    },
    {
      path: '/auth',
      name: 'RegisterLogin',
      component: () => import('../components/pages/auth/RegisterLogin.vue'),
      meta: {
        requiresUserVisitor: true
      }
    },
    {
      path: '/reset-password',
      name: 'ResetPassword',
      component: () => import('../components/pages/auth/ResetPassword.vue'),
      meta: {
        requiresUserVisitor: true
      }
    },
  ]


const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresUserAuth)) {
    // if (GET_ADMIN_TOKEN_GETTER) {
    if (!localStorage.getItem('userData') && from.path !== '/auth') {
      next({
        name: 'RegisterLogin'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresUserVisitor)) {
    // if (!GET_ADMIN_TOKEN_GETTER) {
    if (localStorage.getItem('userData') && to.path !== '/') {
      next({
        name: 'Home'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
