import { createApp } from 'vue'
import './css/index.css'
import App from './App.vue'
import routes from './routers/router'

createApp(App).use(routes).mount('#app')
