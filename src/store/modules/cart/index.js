import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const cart = {
  namespaced: true,
  state() {
    return {
      cart: []
    }
  },
  mutations,
  getters,
  actions
}

export default cart
