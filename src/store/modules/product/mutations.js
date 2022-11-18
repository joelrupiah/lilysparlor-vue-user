import { SET_PRODUCTS_MUTATION } from "../../storeConstants";

export default {
    [SET_PRODUCTS_MUTATION](state, payload) {
        state.products = payload
        state.errors = null
    },

}
