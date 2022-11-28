export default {
    cartCountItem(state){
        return state.cart.length
    },
    getCartItem(state){
        return state.cart
    },
    cartTotalPrice(state){
        let total = 0

        state.cart.forEach(item => {
            total += item.service.price * item.quantity
        })
        return total
    }
}
