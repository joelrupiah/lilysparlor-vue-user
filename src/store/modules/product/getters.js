import { GET_PRODUCTS_GETTER } from "../../storeConstants";

export default {
    [GET_PRODUCTS_GETTER]: (state) => {
        return state.products
    },

}
