<template>
  <div id="user-header">
    <notifications position="top right" class="mt-3" group="logout" />
    <div class="header-top">
      <div class="container">
        <div class="header-left">
          <a href="tel:#"><i class="icon-phone"></i>Call: +0000000000</a>
        </div><!-- End .header-left -->

        <div class="header-right">

          <ul class="top-menu">
            <li>
              <a href="#">Links</a>
              <ul>
                <!-- <li><a href="#signin-modal" data-toggle="modal">Sign in / Sign up</a></li> -->
                <li v-if="!isAuthenticated"><a href="/auth">Sign in / Sign up</a></li>
                <li v-if="isAuthenticated"><a href="/account">Account</a></li>
                <li v-if="isAuthenticated" @click.prevent="logoutUser" style="cursor:pointer"><a href="">Logout</a></li>
              </ul>
            </li>
          </ul><!-- End .top-menu -->
        </div><!-- End .header-right -->

      </div><!-- End .container -->
    </div><!-- End .header-top -->

    <div class="header-middle">
      <div class="container">
        <div class="header-left">
          <button class="mobile-menu-toggler">
            <span class="sr-only">Toggle mobile menu</span>
            <i class="icon-bars"></i>
          </button>

          <a href="/" class="logo">
            <h3 style="color:purple">Lilys Parlor</h3>
            <!-- <img src="assets/images/demos/demo-4/logo.png" alt="Molla Logo" width="105" height="25"> -->
          </a>
        </div><!-- End .header-left -->

        <div class="header-center">
          <div class="header-search header-search-extended header-search-visible d-none d-lg-block">
            <a href="#" class="search-toggle" role="button"><i class="icon-search"></i></a>
            <form action="#" method="get">
              <div class="header-search-wrapper search-wrapper-wide">
                <label for="q" class="sr-only">Search</label>
                <button class="btn btn-primary" type="submit"><i class="icon-search"></i></button>
                <input type="search" class="form-control" name="q" id="q" placeholder="Search product ..." required>
              </div><!-- End .header-search-wrapper -->
            </form>
          </div><!-- End .header-search -->
        </div>

        <div class="header-right">

          <div class="dropdown cart-dropdown">
            <a href="#" class="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false" data-display="static">
              <div class="icon">
                <i class="icon-shopping-cart"></i>
                <span class="cart-count">{{ cartCount }}</span>
              </div>
              <p>Cart</p>
            </a>

            <div class="dropdown-menu dropdown-menu-right">
              <div class="dropdown-cart-products">
                <div class="product" v-for="(item, i) in cart" :key="i">
                  <div class="product-cart-details">
                    <h4 class="product-title">
                      <a href="product.html">{{ item.service.name }}</a>
                    </h4>

                    <span class="cart-product-info">
                      <span class="cart-product-qty">{{ item.quantity }}</span>
                      x ${{ item.service.price }}
                    </span>
                  </div><!-- End .product-cart-details -->

                  <figure class="product-image-container">
                    <a href="product.html" class="product-image">
                      <img src="assets/images/products/cart/product-1.jpg" alt="product">
                    </a>
                  </figure>
                  <a href="#" class="btn-remove" title="Remove Service"
                    @click.prevent="removeServiceInCart(item.service)">
                    <i class="icon-close"></i>
                  </a>
                </div><!-- End .product -->

              </div><!-- End .cart-product -->

              <div class="dropdown-cart-products" v-if="emptyCart()">
                <h6 class="text-center text-danger">Cart is empty</h6>
              </div><!-- End .cart-product -->

              <div class="dropdown-cart-total">
                <span>Total</span>

                <span class="cart-total-price">${{ totalCartPrice }}</span>
              </div><!-- End .dropdown-cart-total -->

              <div class="dropdown-cart-action">
                <a href="/cart" class="btn btn-primary">View Cart</a>
                <a href="/checkout" class="btn btn-outline-primary-2"><span>Checkout</span><i
                    class="icon-long-arrow-right"></i></a>
              </div><!-- End .dropdown-cart-total -->
            </div><!-- End .dropdown-menu -->
          </div><!-- End .cart-dropdown -->
        </div><!-- End .header-right -->
      </div><!-- End .container -->
    </div><!-- End .header-middle -->
  </div>
</template>

<script>
export default {
  name: 'UserHeader',
  data() {
    return {}
  },
  methods: {
    async getStoredCartItems() {
      await this.$store.dispatch('cart/getStoredCartItems')
    },
    removeServiceInCart(service) {
      this.$store.dispatch('cart/removeServiceInCart', service)
    },
    emptyCart() {
      return (this.cart.length < 1)
    },
    logoutUser() {
      this.$store.dispatch('auth/logoutUser')
        .then(() => {
          this.loading = false
          this.$notify({
            group: 'logout',
            type: 'success',
            title: 'Logout succesful. Redirecting .......'
          });
          setTimeout(function () {
            window.location.href = '/auth'
          }, 3000)
        })
    }
  },
  computed: {
    cartCount() {
      return this.$store.getters['cart/cartCountItem']
    },
    cart() {
      return this.$store.getters['cart/getCartItem']
    },
    totalCartPrice() {
      return this.$store.getters['cart/cartTotalPrice']
    },
    isAuthenticated() {
      // let token = JSON.parse(localStorage.getItem('userData')).token
      let token = !!window.localStorage.getItem('userData')
      return token
    }
  },
  async mounted() {
    await this.getStoredCartItems()
  }
}
</script>
