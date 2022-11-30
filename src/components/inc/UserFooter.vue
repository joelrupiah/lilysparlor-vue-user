<template>
  <div id="user-footer">
    <footer class="footer">
      <div class="cta bg-image bg-dark pt-4 pb-5 mb-0"
        style="background-image: url(assets/images/demos/demo-4/bg-5.jpg);">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-sm-10 col-md-8 col-lg-6">
              <div class="cta-heading text-center">
                <h3 class="cta-title text-white">Get The Latest Deals</h3><!-- End .cta-title -->
                <p class="cta-desc text-white">and receive <span class="font-weight-normal">$20 coupon</span> for first
                  shopping</p><!-- End .cta-desc -->
              </div><!-- End .text-center -->

              <form action="#">
                <div class="input-group input-group-round">
                  <input type="email" class="form-control form-control-white" placeholder="Enter your Email Address"
                    aria-label="Email Adress" required>
                  <div class="input-group-append">
                    <button class="btn btn-primary" type="submit"><span>Subscribe</span><i
                        class="icon-long-arrow-right"></i></button>
                  </div><!-- .End .input-group-append -->
                </div><!-- .End .input-group -->
              </form>
            </div><!-- End .col-sm-10 col-md-8 col-lg-6 -->
          </div><!-- End .row -->
        </div><!-- End .container -->
      </div><!-- End .cta -->
      <div class="footer-middle">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-lg-6">
              <div class="widget widget-about">
                <h3 style="color:purple">Lilys Parlor</h3>
              </div><!-- End .widget about-widget -->
            </div><!-- End .col-sm-6 col-lg-3 -->

            <div class="col-sm-6 col-lg-6">
              <div class="widget">
                <h4 class="widget-title">My Account</h4><!-- End .widget-title -->

                <ul class="widget-list">
                  <li v-if="!isAuthenticated"><a href="#">Sign In</a></li>
                  <li v-if="isAuthenticated"><a href="/cart">View Cart</a></li>
                  <li v-if="isAuthenticated"><a href="/checkout">Checkout</a></li>
                </ul><!-- End .widget-list -->
              </div><!-- End .widget -->
            </div><!-- End .col-sm-6 col-lg-3 -->
          </div><!-- End .row -->
        </div><!-- End .container -->
      </div><!-- End .footer-middle -->
    </footer><!-- End .footer -->
  </div>
</template>

<script>
export default {
  name: 'UserFooter',
  data() {
    return {}
  },
  computed: {
    isAuthenticated() {
      let token = !!window.localStorage.getItem('userData')
      return token
    }
  }
}
</script>
