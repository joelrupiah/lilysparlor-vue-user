<template>
<div id="user-master">
  <div class="page-wrapper">
    <header class="header header-intro-clearance header-4">

    <user-header />

      <user-navbar />

    </header><!-- End .header -->

    <main class="main">

      <router-view />

    </main><!-- End .main -->

<user-footer v-if="!['RegisterLogin'].includes($route.name)" />

  </div><!-- End .page-wrapper -->
  <button id="scroll-top" title="Back to Top"><i class="icon-arrow-up"></i></button>

  <!-- Mobile Menu -->
  <div class="mobile-menu-overlay"></div><!-- End .mobil-menu-overlay -->

  <mobile-menu />

  <!-- Sign in / Register Modal -->

<!-- <auth-modal /> -->

<!-- <subscribe-modal /> -->

</div>
</template>

<script>
import UserHeader from './inc/UserHeader.vue'
import UserNavbar from './inc/UserNavbar.vue'
import UserFooter from './inc/UserFooter.vue'
import AuthModal from './resources/AuthModal.vue'
import SubscribeModal from './resources/SubscribeModal.vue'
import MobileMenu from './resources/MobileMenu.vue'
export default {
  components: {
    UserHeader,
    UserNavbar,
    UserFooter,
    AuthModal,
    SubscribeModal,
    MobileMenu
  },
  name: 'UserMaster'
}
</script>
