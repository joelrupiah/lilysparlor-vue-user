import Axios from "axios"
import Api from '../../../requests/Api'
import {
    SET_PRODUCTS_MUTATION,
    GET_PRODUCTS_ACTION
} from "../../storeConstants"

export default {

    async [GET_PRODUCTS_ACTION](context) {
        let response = ''
        try {
            response = await Api().get('/get-products')
            context.commit(SET_PRODUCTS_MUTATION, response.data.products)
            return response
        } catch (error) {
            console.log(error)
        }

    },
}
