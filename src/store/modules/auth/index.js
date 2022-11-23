import actions from './actions'
import getters from './getters'
import mutations  from './mutations'

const auth = {
    namespaced: true,
    state() {
        return {
            token: JSON.parse(localStorage.getItem('userData')).token,
            id: JSON.parse(localStorage.getItem('userData')).id,
            email: JSON.parse(localStorage.getItem('userData')).email,
            name: JSON.parse(localStorage.getItem('userData')).name,
            avatar: JSON.parse(localStorage.getItem('userData')).avatar
        }
    },
    mutations,
    getters,
    actions
}

export default auth
