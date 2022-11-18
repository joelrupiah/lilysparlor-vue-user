import { createApp } from 'vue'
import UserMaster from './components/UserMaster.vue'
import router from './router'
import store from './store'

import Vuesax from 'vuesax3'
import ElementPlus from 'element-plus'
import Notifications from '@kyvg/vue3-notification'

import 'element-plus/dist/index.css'
import 'vuesax3/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css'

const app = createApp(UserMaster)

app.component('user-master', UserMaster)

app.use(Vuesax)
app.use(ElementPlus)
app.use(Notifications)

app.use(router)
app.use(store)

app.mount('#user')
