<template>
<div id="home">
  <div class="intro-slider-container mb-5">
    <div class="intro-slider owl-carousel owl-theme owl-nav-inside owl-light" data-toggle="owl" data-owl-options='{
                    "dots": true,
                    "nav": false,
                    "responsive": {
                        "1200": {
                            "nav": true,
                            "dots": false
                        }
                    }
                }'>
      <div class="intro-slide" style="background-image: url(assets/images/demos/demo-4/slider/slide-1.png);">
        <div class="container intro-content">
          <div class="row justify-content-end">
            <div class="col-auto col-sm-7 col-md-6 col-lg-5">
              <h3 class="intro-subtitle text-third">Deals and Promotions</h3><!-- End .h3 intro-subtitle -->
              <h1 class="intro-title">Beats by</h1>
              <h1 class="intro-title">Dre Studio 3</h1><!-- End .intro-title -->

              <div class="intro-price">
                <sup class="intro-old-price">$349,95</sup>
                <span class="text-third">
                  $279<sup>.99</sup>
                </span>
              </div><!-- End .intro-price -->

              <a href="category.html" class="btn btn-primary btn-round">
                <span>Shop More</span>
                <i class="icon-long-arrow-right"></i>
              </a>
            </div><!-- End .col-lg-11 offset-lg-1 -->
          </div><!-- End .row -->
        </div><!-- End .intro-content -->
      </div><!-- End .intro-slide -->

      <div class="intro-slide" style="background-image: url(assets/images/demos/demo-4/slider/slide-2.png);">
        <div class="container intro-content">
          <div class="row justify-content-end">
            <div class="col-auto col-sm-7 col-md-6 col-lg-5">
              <h3 class="intro-subtitle text-primary">New Arrival</h3><!-- End .h3 intro-subtitle -->
              <h1 class="intro-title">Apple iPad Pro <br>12.9 Inch, 64GB </h1><!-- End .intro-title -->

              <div class="intro-price">
                <sup>Today:</sup>
                <span class="text-primary">
                  $999<sup>.99</sup>
                </span>
              </div><!-- End .intro-price -->

              <a href="category.html" class="btn btn-primary btn-round">
                <span>Shop More</span>
                <i class="icon-long-arrow-right"></i>
              </a>
            </div><!-- End .col-md-6 offset-md-6 -->
          </div><!-- End .row -->
        </div><!-- End .intro-content -->
      </div><!-- End .intro-slide -->
    </div><!-- End .intro-slider owl-carousel owl-simple -->

    <span class="slider-loader"></span><!-- End .slider-loader -->
  </div><!-- End .intro-slider-container -->

  <home-category></home-category>

  <div class="mb-4"></div><!-- End .mb-4 -->



  <home-product></home-product>

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
            <a href="#" class="btn btn-primary btn-round"><span>Shop Now - $429.99</span><i class="icon-long-arrow-right"></i></a>
          </div><!-- End .cta-content -->
        </div><!-- End .col-md-12 -->
      </div><!-- End .row -->
    </div><!-- End .cta -->
  </div><!-- End .container -->

 <home-service></home-service>

  <div class="mb-3"></div><!-- End .mb-5 -->

  <div class="container">
    <div class="heading text-center mb-3">
      <h2 class="title">Deals & Outlet</h2><!-- End .title -->
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
