import { GET_SERVICES_GETTER } from "../../storeConstants";

export default {
    [GET_SERVICES_GETTER]: (state) => {
        return state.services
    },

}
