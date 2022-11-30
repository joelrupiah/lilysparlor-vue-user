import Axios from "axios"
import { REGISTER_ACTION, REGISTER_AUTH_ACTION, LOGIN_AUTH_ACTION, LOGIN_ACTION, LOGOUT_ACTION, SET_USER_TOKEN_DATA_MUTATION } from "../../storeConstants"

export default {

    logoutUser(context) {
        context.commit(SET_USER_TOKEN_DATA_MUTATION, {
            email: null,
            token: null,
            name: null,
            id: null,
            avatar: null
        })
        localStorage.removeItem('userData')
    },

    async [REGISTER_ACTION](context, payload){
        return context.dispatch(REGISTER_AUTH_ACTION, {
            ...payload,
            url: 'http://127.0.0.1:8000/api/register'
        })
    },

    async [LOGIN_ACTION](context, payload) {
        return context.dispatch(LOGIN_AUTH_ACTION, {
            ...payload,
            url: 'http://127.0.0.1:8000/api/login'
        })
    },

    async [REGISTER_AUTH_ACTION](_, payload) {
        let postData = {
            name: payload.name,
            email: payload.email,
            password: payload.password,
            password_confirmation: payload.password_confirmation
        }
        let response = ''
        try {
            response = await Axios.post([payload.url], postData)
            return response
        } catch (error) {
            console.log(error.response.data.error[0])
        }

    },

    async [LOGIN_AUTH_ACTION](context, payload) {
        let postData = {
            email: payload.email,
            password: payload.password
        }
        let response = ''
        try {
            response = await Axios.post([payload.url], postData)
        } catch (error) {
            console.log(error.response.data.error[0])
        }

        if (response.status === 200) {
            let tokenData = {
                email: response.data.email,
                token: response.data.token,
                name: response.data.name,
                id: response.data.id,
                avatar: response.data.avatar
            }
            localStorage.setItem('userData', JSON.stringify(tokenData))
            context.commit(SET_USER_TOKEN_DATA_MUTATION, tokenData)
        }
    }
}
