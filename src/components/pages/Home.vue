<template>
<div id="home">

  <!-- <home-category></home-category> -->

  <div class="mb-4"></div><!-- End .mb-4 -->



  <!-- <home-product></home-product> -->

  <div class="mb-6"></div><!-- End .mb-6 -->

  <div class="container">
    <div class="cta cta-border mb-5" style="background-image: url(assets/images/demos/demo-4/bg-1.jpg);">
      <img src="assets/images/demos/demo-4/camera.png" alt="camera" class="cta-img">
      <div class="row justify-content-center">
        <div class="col-md-12">
          <div class="cta-content">
            <div class="cta-text text-right text-white">
              <p>Shop Today’s Deals <br><strong>Awesome Made Easy. HERO7 Black</strong></p>
            </div><!-- End .cta-text -->
          </div><!-- End .cta-content -->
        </div><!-- End .col-md-12 -->
      </div><!-- End .row -->
    </div><!-- End .cta -->
  </div><!-- End .container -->

 <home-service></home-service>

  <div class="mb-3"></div><!-- End .mb-5 -->

  <div class="container">
    <div class="heading text-center mb-3">
      <h2 class="title">Deals</h2><!-- End .title -->
      <p class="title-desc">Today’s deal and more</p><!-- End .title-desc -->
    </div><!-- End .heading -->

    <div class="row">
      <div class="col-lg-6 deal-col">
        <div class="deal" style="background-image: url('assets/images/demos/demo-4/deal/bg-1.jpg');">
          <div class="deal-top">
            <h2>Deal of the Day.</h2>
            <h4>Limited quantities. </h4>
          </div><!-- End .deal-top -->

          <div class="deal-content">
            <h3 class="product-title"><a href="product.html">Home Smart Speaker with Google Assistant</a></h3><!-- End .product-title -->

            <div class="product-price">
              <span class="new-price">$129.00</span>
              <span class="old-price">Was $150.99</span>
            </div><!-- End .product-price -->

            <a href="product.html" class="btn btn-link"><span>Shop Now</span><i class="icon-long-arrow-right"></i></a>
          </div><!-- End .deal-content -->

          <div class="deal-bottom">
            <div class="deal-countdown daily-deal-countdown" data-until="+10h"></div><!-- End .deal-countdown -->
          </div><!-- End .deal-bottom -->
        </div><!-- End .deal -->
      </div><!-- End .col-lg-6 -->

      <div class="col-lg-6 deal-col">
        <div class="deal" style="background-image: url('assets/images/demos/demo-4/deal/bg-2.jpg');">
          <div class="deal-top">
            <h2>Your Exclusive Offers.</h2>
            <h4>Sign in to see amazing deals.</h4>
          </div><!-- End .deal-top -->

          <div class="deal-content">
            <h3 class="product-title"><a href="product.html">Certified Wireless Charging Pad for iPhone / Android</a></h3><!-- End .product-title -->

            <div class="product-price">
              <span class="new-price">$29.99</span>
            </div><!-- End .product-price -->

            <a href="login.html" class="btn btn-link"><span>Sign In and Save money</span><i class="icon-long-arrow-right"></i></a>
          </div><!-- End .deal-content -->

          <div class="deal-bottom">
            <div class="deal-countdown offer-countdown" data-until="+11d"></div><!-- End .deal-countdown -->
          </div><!-- End .deal-bottom -->
        </div><!-- End .deal -->
      </div><!-- End .col-lg-6 -->
    </div><!-- End .row -->

    <div class="more-container text-center mt-1 mb-5">
      <a href="#" class="btn btn-outline-dark-2 btn-round btn-more"><span>Shop more Outlet deals</span><i class="icon-long-arrow-right"></i></a>
    </div><!-- End .more-container -->
  </div><!-- End .container -->

  <div class="mb-5"></div><!-- End .mb-5 -->



  <div class="mb-4"></div><!-- End .mb-4 -->

  <div class="container">
    <hr class="mb-0">
  </div><!-- End .container -->

  <div class="icon-boxes-container bg-transparent">
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-lg-3">
          <div class="icon-box icon-box-side">
            <span class="icon-box-icon text-dark">
              <i class="icon-rocket"></i>
            </span>
            <div class="icon-box-content">
              <h3 class="icon-box-title">Free Shipping</h3><!-- End .icon-box-title -->
              <p>Orders $50 or more</p>
            </div><!-- End .icon-box-content -->
          </div><!-- End .icon-box -->
        </div><!-- End .col-sm-6 col-lg-3 -->

        <div class="col-sm-6 col-lg-3">
          <div class="icon-box icon-box-side">
            <span class="icon-box-icon text-dark">
              <i class="icon-rotate-left"></i>
            </span>

            <div class="icon-box-content">
              <h3 class="icon-box-title">Free Returns</h3><!-- End .icon-box-title -->
              <p>Within 30 days</p>
            </div><!-- End .icon-box-content -->
          </div><!-- End .icon-box -->
        </div><!-- End .col-sm-6 col-lg-3 -->

        <div class="col-sm-6 col-lg-3">
          <div class="icon-box icon-box-side">
            <span class="icon-box-icon text-dark">
              <i class="icon-info-circle"></i>
            </span>

            <div class="icon-box-content">
              <h3 class="icon-box-title">Get 20% Off 1 Item</h3><!-- End .icon-box-title -->
              <p>when you sign up</p>
            </div><!-- End .icon-box-content -->
          </div><!-- End .icon-box -->
        </div><!-- End .col-sm-6 col-lg-3 -->

        <div class="col-sm-6 col-lg-3">
          <div class="icon-box icon-box-side">
            <span class="icon-box-icon text-dark">
              <i class="icon-life-ring"></i>
            </span>

            <div class="icon-box-content">
              <h3 class="icon-box-title">We Support</h3><!-- End .icon-box-title -->
              <p>24/7 amazing services</p>
            </div><!-- End .icon-box-content -->
          </div><!-- End .icon-box -->
        </div><!-- End .col-sm-6 col-lg-3 -->
      </div><!-- End .row -->
    </div><!-- End .container -->
  </div><!-- End .icon-boxes-container -->
</div>
</template>

<script>
import HomeCategory from '../resources/HomeCategory.vue';
import HomeProduct from '../resources/HomeProduct.vue';
import HomeService from '../resources/HomeService.vue';
export default {
  name: 'Home',
  components: {
    HomeCategory,
    HomeProduct,
    HomeService
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = to.meta.title || 'Lilysparlor - Home'
      }
    },
  }
}
</script>
