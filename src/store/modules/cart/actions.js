import Api from '../../../requests/Api'

export default {

    async addToCart(context, { product, quantity }) {
        let response = ''
        try {
            response = await Api().post('/add-to-cart', { product, quantity })
            context.commit('cartItem', { product, quantity })
            return response
        } catch (error) {
            console.log(error)
        }
    },

    async getStoredCartItems(context) {
        let response = ''
        try {
            response = await Api().get('/cart-items')
            context.commit('getProductsInCart', response.data.carts)
            return response
        } catch (error) {
            console.log(error)
        }
    },

    async removeProductInCart(context, product) {
        context.commit('deleteProductInCart', product)
        let response = ''
        try {
            response = await Api().delete(`/delete-cart-item/${product.id}`)
        } catch (error) {
            console.log(error)
        }
    },

    async deleteAllCartItems(context) {
        let response = ''
        try {
            response = await Api().delete('/delete-all-cart-items')
            context.commit('clearAllCartItems')
            return response
        } catch (error) {
            console.log(error)
        }
    }

}
