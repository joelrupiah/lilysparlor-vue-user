import Axios from "axios"
import BaseApi from '../../../requests/Api'
import {
    SET_PRODUCTS_MUTATION,
    GET_PRODUCTS_ACTION
} from "../../storeConstants"

export default {

    async [GET_PRODUCTS_ACTION](context) {
        let response = ''
        try {
            response = await Axios.get('http://127.0.0.1:8000/api/get-products')
            context.commit(SET_PRODUCTS_MUTATION, response.data.products)
            return response
        } catch (error) {
            console.log(error)
        }

    },
}
