<template>
    <div id="home-category">
        <div class="container">
            <h2 class="title text-center mb-4">Shop By Categories</h2><!-- End .title text-center -->

            <div class="cat-blocks-container">
                <div class="row">
                    <div class="col-6 col-sm-4 col-lg-2" v-for="(category, index) in categories" :key="index">
                        <a href="category.html" class="cat-block">
                            <figure>
                                <span>
                                    <img :src="category.image" alt="Category image">
                                </span>
                            </figure>

                            <h3 class="cat-block-title">{{ category.name }}</h3><!-- End .cat-block-title -->
                        </a>
                    </div><!-- End .col-sm-4 col-lg-2 -->

                </div><!-- End .row -->
            </div><!-- End .cat-blocks-container -->
        </div><!-- End .container -->
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { GET_CATEGORIES_ACTION, GET_CATEGORIES_GETTER } from '../../store/storeConstants'
export default {
    name: 'HomeCategory',
    data() {
        return {}
    },
    methods: {
        ...mapActions('category', {
            getAllCategoriesList: GET_CATEGORIES_ACTION
        }),

        getAllCategories() {
            this.getAllCategoriesList()
        }
    },
    computed: {
        ...mapGetters('category', {
            categories: GET_CATEGORIES_GETTER
        })
    },
    async mounted() {
        await this.getAllCategories()
    }
}
</script>