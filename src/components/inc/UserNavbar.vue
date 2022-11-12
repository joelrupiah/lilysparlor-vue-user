<template>
  <div id="user-navbar">
    <div class="header-bottom sticky-header">
      <div class="container">
        <div class="header-left">
          <div class="dropdown category-dropdown">
            <a href="#" class="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static" title="Browse Categories">
              Browse Categories <i class="icon-angle-down"></i>
            </a>

            <div class="dropdown-menu">
              <nav class="side-nav">
                <ul class="menu-vertical sf-arrows">
                  <li><a href="#">Kitchen Cabinets</a></li>
                  <li><a href="#">Coffee & Tables</a></li>
                  <li><a href="#">Outdoor Furniture </a></li>
                </ul><!-- End .menu-vertical -->
              </nav><!-- End .side-nav -->
            </div><!-- End .dropdown-menu -->
          </div><!-- End .category-dropdown -->
        </div><!-- End .header-left -->

        <div class="header-center">
          <nav class="main-nav">
            <ul class="menu sf-arrows">
              <li class="megamenu-container active">
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/shop">Shop</a>
              </li>
              <li>
                <a href="product.html">About</a>
              </li>
              <li>
                <a href="product.html">Contact Us</a>
              </li>
            </ul><!-- End .menu -->
          </nav><!-- End .main-nav -->
        </div><!-- End .header-center -->

        <div class="header-right">
          <i class="la la-lightbulb-o"></i>
          <p>Clearance<span class="highlight">&nbsp;Up to 30% Off</span></p>
        </div>
      </div><!-- End .container -->
    </div><!-- End .header-bottom -->
  </div>
</template>

<script>
export default {
  name: 'UserNavbar'
}
</script>
