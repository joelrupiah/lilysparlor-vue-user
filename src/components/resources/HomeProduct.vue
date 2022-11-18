<template>
    <div id="home-template">
        <div class="container for-you">
            <div class="heading heading-flex mb-3">
                <div class="heading-left">
                    <h2 class="title">Featured Products</h2><!-- End .title -->
                </div><!-- End .heading-left -->

                <div class="heading-right">
                    <a href="/shop" class="title-link">View All Products <i class="icon-long-arrow-right"></i></a>
                </div><!-- End .heading-right -->
            </div><!-- End .heading -->

            <div class="products">
                <div class="row justify-content-center">

                    <div class="col-6 col-md-4 col-lg-3" v-for="(product, index) in products" :key="index">
                        <div class="product product-2">
                            <figure class="product-media">
                                <a href="/product-detail">
                                    <img src="assets/images/demos/demo-4/products/product-10.jpg" alt="Product image"
                                        class="product-image">
                                </a>

                                <div class="product-action-vertical">
                                    <a @click.prevent="addToWishlist(product)" class="btn-product-icon btn-wishlist"
                                        title="Add to wishlist"></a>
                                </div><!-- End .product-action -->

                                <div class="product-action">
                                    <a @click.prevent="addToCart(product)" class="btn-product btn-cart"
                                        title="Add to cart"><span>add to
                                            cart</span></a>
                                    <a href="/product-detail" class="btn-product btn-quickview"
                                        title="Quick view"><span>quick view</span></a>
                                </div><!-- End .product-action -->
                            </figure><!-- End .product-media -->

                            <div class="product-body">
                                <div class="product-cat">
                                    <a href="#">{{ product.name }}</a>
                                </div><!-- End .product-cat -->
                                <h3 class="product-title"><a href="/product-detail" v-html="product.description"></a>
                                </h3><!-- End .product-title -->
                                <div class="product-price">
                                    <span class="new-price">kshs {{ product.price }}</span>
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
import { GET_PRODUCTS_ACTION, GET_PRODUCTS_GETTER } from '../../store/storeConstants'
export default {
    name: 'HomeProduct',
    data() {
        return {}
    },
    methods: {
        ...mapActions('product', {
            getAllProductsList: GET_PRODUCTS_ACTION
        }),

        getAllProducts() {
            this.getAllProductsList()
        },

        addToCart(product) {
            // alert(product.name + 'Added to cart')
            this.$store.dispatch('cart/addToCart', {
                product,
                quantity: 1
            })
        },

        addToWishlist(product) {
            // alert(product.name + 'Added to wishlist')
            this.$store.dispatch('wishlist', {
                product
            })
        }
    },
    computed: {
        ...mapGetters('product', {
            products: GET_PRODUCTS_GETTER
        })
    },
    async mounted() {
        await this.getAllProducts()
    }
}
</script>