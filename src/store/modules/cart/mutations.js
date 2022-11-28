import { SET_CATEGORIES_MUTATION } from "../../storeConstants";

export default {
    cartItem(state, { service, quantity }) {
        let serviceInCart = state.cart.find(item => {
            return item.service.id === service.id
        })
        if (serviceInCart) {
            serviceInCart.quantity++
            return
        }
        state.cart.push({ service, quantity })
    },

    clearAllCartItems(state) {
        state.cart = []
    },

    deleteServiceInCart(state, service) {
        state.cart = state.cart.filter(item => {
            return item.service !== service
        })
    },

    getServicesInCart(state, payload) {
        state.cart = payload
    }

}
