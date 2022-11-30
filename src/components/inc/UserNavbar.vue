<template>
  <div id="user-navbar">
    <div class="header-bottom sticky-header">
      <div class="container">
        <div class="header-left">
          <div class="dropdown category-dropdown">
            <a href="/" class="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static" title="Browse Categories">
              Browse Services <i class="icon-angle-down"></i>
            </a>
          </div><!-- End .category-dropdown -->
        </div><!-- End .header-left -->

        <div class="header-center">
          <nav class="main-nav">
            <ul class="menu sf-arrows">
              <li class="megamenu-container active">
                <a href="/">Home</a>
              </li>
            </ul><!-- End .menu -->
          </nav><!-- End .main-nav -->
        </div><!-- End .header-center -->

        <div class="header-right">
          <i class="la la-lightbulb-o"></i>
          <p>Deal<span class="highlight">&nbsp;30% Off</span></p>
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
