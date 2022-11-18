import { GET_CATEGORIES_GETTER } from "../../storeConstants";
// import { toRaw } from 'vue'

export default {
    [GET_CATEGORIES_GETTER]: (state) => {
        return state.categories
    },

}
