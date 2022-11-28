import Axios from "axios"
import BaseApi from '../../../requests/Api'
import {
    SET_SERVICES_MUTATION,
    GET_SERVICES_ACTION
} from "../../storeConstants"

export default {

    async [GET_SERVICES_ACTION](context) {
        let response = ''
        try {
            response = await Axios.get('http://127.0.0.1:8000/api/get-services')
            context.commit(SET_SERVICES_MUTATION, response.data.services)
            console.log(response.data.services[0])
            return response
        } catch (error) {
            console.log(error)
        }

    },
}
