<template>
    <div id="home-service">
        <div class="container">
            <h2 class="title text-center mb-4">Our Services</h2>
            <div class="row justify-content-center">
                <div class="col-md-6 col-lg-4" v-for="(service, index) in services" :key="index">
                    <div class="banner banner-overlay banner-overlay-light">
                        <a href="#">
                            <!-- <img :src="service.image_one" alt="Banner"> -->
                            <img src="assets/images/demos/demo-4/banners/banner-2.jpg" alt="Banner">
                        </a>

                        <div class="banner-content">
                            <h3 class="banner-title"><a href="#"><strong>{{ service.name }}</strong> <br></a></h3>
                            <!-- End .banner-title -->
                            <a href="#" class="banner-link" @click.prevent="addToCart(service)">
                                Book Now<i class="icon-long-arrow-right"></i></a>
                        </div><!-- End .banner-content -->
                    </div><!-- End .banner -->
                </div><!-- End .col-md-4 -->
            </div><!-- End .row -->
        </div><!-- End .container -->
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { GET_SERVICES_ACTION, GET_SERVICES_GETTER } from '../../store/storeConstants'
export default {
    name: 'HomeService',
    data() {
        return {}
    },
    methods: {
      ...mapActions('service', {
          getAllServicesList: GET_SERVICES_ACTION
      }),

      getAllServices() {
          this.getAllServicesList()
      },

      addToCart(service) {
            // alert(product.name + 'Added to cart')
            this.$store.dispatch('cart/addToCart', {
                service,
                quantity: 1
            })
        },
    },
    computed: {
        ...mapGetters('service', {
            services: GET_SERVICES_GETTER
        })
    },
    async mounted() {
        await this.getAllServices()
    }
}
</script>
