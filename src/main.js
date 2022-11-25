import { createApp } from 'vue'
import UserMaster from './components/UserMaster.vue'
import router from './router'
import store from './store'

import Vuesax from 'vuesax3'
import ElementPlus from 'element-plus'
import Notifications from '@kyvg/vue3-notification'
import ToastPlugin from 'vue-toast-notification';

//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';
import 'element-plus/dist/index.css'
import 'vuesax3/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css'

const app = createApp(UserMaster)

app.component('user-master', UserMaster)

app.use(Vuesax)
app.use(ElementPlus)
app.use(Notifications)
app.use(ToastPlugin);

app.use(router)
app.use(store)

app.mount('#user')
