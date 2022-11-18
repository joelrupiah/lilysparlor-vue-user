import { SET_CATEGORIES_MUTATION } from "../../storeConstants";

export default {
    cartItem(state, { product, quantity }) {
        let productInCart = state.cart.find(item => {
            return item.product.id === product.id
        })
        if (productInCart) {
            productInCart.quantity++
            return
        }
        state.cart.push({ product, quantity })
    },

    clearAllCartItems(state) {
        state.cart = []
    },

    deleteProductInCart(state, product) {
        state.cart = state.cart.filter(item => {
            return item.product !== product
        })
    },

    getProductsInCart(state, payload) {
        state.cart = payload
    }

}
