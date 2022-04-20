import { createApp } from 'vue'
import './assets/scss/index.scss'
import App from './App.vue'
import store from './store/index'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.mount('#app')