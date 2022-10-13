import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import '../src/assets/styles.scss'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)

app.mount('#app')