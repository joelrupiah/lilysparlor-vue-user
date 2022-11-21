import {
  createStore,
  createLogger,
} from 'vuex'
import auth from './modules/auth/index'
import category from './modules/category/index'
import product from './modules/product/index'
import service from './modules/service/index'
import cart from './modules/cart/index'
// import createPersistedState from "vuex-persistedstate"
// import VuexPersistence from 'vuex-persist'

// const debug = process.env.NODE_ENV !== 'production'

const store = createStore({
  modules: {
    auth,
    category,
    product,
    service,
    cart
  },
  // plugins: [new VuexPersistence().plugin],
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
  // plugins: [createPersistedState()]
})

export default store
