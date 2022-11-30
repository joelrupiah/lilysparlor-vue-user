<template>
    <div id="home-service">
        <div class="container for-you">
            <div class="heading heading-flex mb-3">
                <div class="heading-left">
                    <h2 class="title">Our Services</h2><!-- End .title -->
                </div><!-- End .heading-left -->
            </div><!-- End .heading -->

            <div class="products">
                <div class="row justify-content-center">

                    <div class="col-6 col-md-4 col-lg-3" v-for="(service, index) in services" :key="index">
                        <div class="product product-2">
                            <figure class="product-media">
                                <a href="/service-detail">
                                    <img src="assets/images/demos/demo-4/products/product-10.jpg" alt="Service image"
                                        class="product-image">
                                </a>

                                <div class="product-action-vertical">
                                    <a @click.prevent="addToWishlist(service)" class="btn-product-icon btn-wishlist"
                                        title="Add to wishlist"></a>
                                </div><!-- End .product-action -->

                                <div class="product-action">
                                    <a @click.prevent="addToCart(service)" class="btn-product btn-cart"
                                        title="Add to cart"><span>add to
                                            cart</span></a>
                                    <a href="/service-detail" class="btn-product btn-quickview"
                                        title="Quick view"><span>quick view</span></a>
                                </div><!-- End .product-action -->
                            </figure><!-- End .product-media -->

                            <div class="product-body">
                                <div class="product-cat">
                                    <a href="#">{{ service.name }}</a>
                                </div><!-- End .product-cat -->
                                <h3 class="product-title"><a href="/service-detail" v-html="service.description"></a>
                                </h3><!-- End .product-title -->
                                <div class="product-price">
                                    <span class="new-price">kshs {{ service.price }}</span>
                                    <!-- <span class="old-price">Was $349.99</span> -->
                                </div><!-- End .product-price -->
                            </div><!-- End .product-body -->
                        </div><!-- End .product -->
                    </div><!-- End .col-sm-6 col-md-4 col-lg-3 -->

                </div><!-- End .row -->
            </div><!-- End .products -->
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
