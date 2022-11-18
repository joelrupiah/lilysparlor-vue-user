import Axios from "axios"
import Api from '../../../requests/Api'
import {
    SET_CATEGORIES_MUTATION,
    GET_CATEGORIES_ACTION
} from "../../storeConstants"

export default {

    async [GET_CATEGORIES_ACTION](context) {
        let response = ''
        try {
            response = await Api().get('/get-categories')
            context.commit(SET_CATEGORIES_MUTATION, response.data.categories)
            return response
        } catch (error) {
            console.log(error)
        }

    },
}
