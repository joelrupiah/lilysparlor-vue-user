import Api from '../../../requests/Api'

export default {

    async addToCart(context, { service, quantity }) {
        let response = ''
        try {
            response = await Api().post('/add-to-cart', { service, quantity })
            context.commit('cartItem', { service, quantity })
            return response
        } catch (error) {
            console.log(error)
        }
    },

    async getStoredCartItems(context) {
        let response = ''
        try {
            response = await Api().get('/cart-items')
            context.commit('getServicesInCart', response.data.carts)
            return response
        } catch (error) {
            console.log(error)
        }
    },

    async removeServiceInCart(context, service) {
        context.commit('deleteServiceInCart', service)
        let response = ''
        try {
            response = await Api().delete(`/delete-cart-item/${service.id}`)
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
