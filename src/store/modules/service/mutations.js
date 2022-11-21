import { SET_SERVICES_MUTATION } from "../../storeConstants";

export default {
    [SET_SERVICES_MUTATION](state, payload) {
        state.services = payload
        state.errors = null
    },

}
