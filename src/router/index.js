import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin-login',
      name: 'AdminLogin',
      component: () => import('../components/pages/Auth/AdminLogin.vue')
    },
    {
      path: '/doctor-login',
      name: 'DoctorLogin',
      component: () => import('../components/pages/Auth/DoctorLogin.vue')
    },
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('../components/pages/Dashboard.vue')
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../components/pages/User/Profile.vue')
    },
    {
      path: '/permissions-list',
      name: 'PermissionList',
      component: () => import('../components/pages/spatie/permission/PermissionList.vue')
    },
    {
      path: '/create-permissions',
      name: 'CreatePermission',
      component: () => import('../components/pages/spatie/permission/CreatePermission.vue')
    },
    {
      path: '/edit-permissions/:id',
      name: 'EditPermission',
      component: () => import('../components/pages/spatie/permission/EditPermission.vue')
    },
    {
      path: '/roles-list',
      name: 'RoleList',
      component: () => import('../components/pages/spatie/roles/RoleList.vue')
    },
    {
      path: '/create-roles',
      name: 'CreateRole',
      component: () => import('../components/pages/spatie/roles/CreateRole.vue')
    },
    {
      path: '/edit-roles/:id',
      name: 'EditRole',
      component: () => import('../components/pages/spatie/roles/EditRole.vue')
    },
    {
      path: '/admins-list',
      name: 'DoctorList',
      component: () => import('../components/pages/Admin/AdminList.vue')
    },
    {
      path: '/create-admin',
      name: 'CreateAdmin',
      component: () => import('../components/pages/Admin/CreateAdmin.vue')
    },
    {
      path: '/update-admin/:id',
      name: 'EditAdmin',
      component: () => import('../components/pages/Admin/EditAdmin.vue')
    },
  ]
})

export default router
