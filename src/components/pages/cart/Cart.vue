<template>
  <div id="cart">
    <div class="page-header text-center" style="background-image: url('assets/images/page-header-bg.jpg')">
      <div class="container">
        <h1 class="page-title"><span>Shopping Cart</span></h1>
      </div><!-- End .container -->
    </div><!-- End .page-header -->
    <nav aria-label="breadcrumb" class="breadcrumb-nav">
      <div class="container">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">Shopping Cart</li>
        </ol>
      </div><!-- End .container -->
    </nav><!-- End .breadcrumb-nav -->

    <div class="page-content">
      <div class="cart">
        <div class="container">
          <div class="row">
            <div class="col-lg-9">
              <table class="table table-cart table-mobile">
                <thead>
                  <tr>
                    <th>SL</th>
                    <th>Service</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody v-for="(item, index) in cart" :key="index">
                  <tr>
                    <td class="price-col">{{ index + 1 }}</td>
                    <td class="product-col">
                      <div class="product">
                        <figure class="product-media">
                          <a href="#">
                            <img src="assets/images/products/table/product-2.jpg" alt="Service image">
                          </a>
                        </figure>

                        <h3 class="product-title">
                          <a href="#">{{ item.service.name }}</a>
                        </h3><!-- End .product-title -->
                      </div><!-- End .product -->
                    </td>
                    <td class="price-col">${{item.service.price}}</td>
                    <td class="quantity-col">
                      <div class="cart-product-quantity">
                        <input type="number" class="form-control" :value="item.quantity" min="1" max="10" step="1" data-decimals="0"
                          required>
                      </div><!-- End .cart-product-quantity -->
                    </td>
                    <td class="total-col">${{ item.service.price * item.quantity }}</td>
                    <td class="remove-col">
                      <button class="btn-remove">
                        <i class="icon-close" @click.prevent="removeServiceInCart(item.service)"></i>
                      </button>
                    </td>
                  </tr>

                </tbody>
                <tbody>
                  <tr v-if="emptyCart()">
                    <td colspan="6">
                      <p class="text-center text-danger">
                        Cart is empty please
                        <a href="/shop" class="text-primary">shop</a>
                        to continue
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table><!-- End .table table-wishlist -->

              <div class="cart-bottom">
                <div class="cart-discount">
                  <form action="#">
                    <div class="input-group">
                      <input type="text" class="form-control" required placeholder="coupon code">
                      <div class="input-group-append">
                        <button class="btn btn-outline-primary-2" type="submit"><i
                            class="icon-long-arrow-right"></i></button>
                      </div><!-- .End .input-group-append -->
                    </div><!-- End .input-group -->
                  </form>
                </div><!-- End .cart-discount -->

                <a href="#" class="btn btn-outline-dark-2" @click.prevent="updateCart()">
                  <span>UPDATE CART</span><i class="icon-refresh"></i>
                </a>
                <a href="#" class="btn btn-outline-dark-2" @click.prevent="clearCartItems()">
                  <span>CLEAR CART</span><i class="icon-close"></i>
                </a>
              </div><!-- End .cart-bottom -->
            </div><!-- End .col-lg-9 -->
            <aside class="col-lg-3">
              <div class="summary summary-cart">
                <h3 class="summary-title">Cart Total</h3><!-- End .summary-title -->

                <table class="table table-summary">
                  <tbody>
                    <tr class="summary-subtotal">
                      <td>Subtotal:</td>
                      <td>${{ totalCartPrice }}</td>
                    </tr><!-- End .summary-subtotal -->

                    <tr class="summary-total">
                      <td>Total:</td>
                      <td>${{ totalCartPrice }}</td>
                    </tr><!-- End .summary-total -->
                  </tbody>
                </table><!-- End .table table-summary -->

                <a href="/checkout" class="btn btn-outline-primary-2 btn-order btn-block">PROCEED TO CHECKOUT</a>
              </div><!-- End .summary -->

              <a href="/shop" class="btn btn-outline-dark-2 btn-block mb-3"><span>CONTINUE SHOPPING</span><i
                  class="icon-refresh"></i></a>
            </aside><!-- End .col-lg-3 -->
          </div><!-- End .row -->
        </div><!-- End .container -->
      </div><!-- End .cart -->
    </div><!-- End .page-content -->
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data() {
    return {

    }
  },
  methods: {
    emptyCart() {
      return (this.cart.length < 1)
    },
    removeServiceInCart(service) {
      this.$store.dispatch('cart/removeServiceInCart', service)
    },
    clearCartItems() {
      this.$store.dispatch('cart/deleteAllCartItems')
    }
  },
  computed: {
    cart() {
      return this.$store.getters['cart/getCartItem']
    },
    totalCartPrice() {
      return this.$store.getters['cart/cartTotalPrice']
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = to.meta.title || 'Lilysparlor - Cart'
      }
    },
  }
}
</script>
