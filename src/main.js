import { createApp } from 'vue'
import { createPinia } from 'pinia'

// CSS初始化样式的替代方案 normalize.css
import "normalize.css/normalize.css";
// 全局样式
import './styles/index.scss'
// UnoCSS 即时原子CSS引擎
import 'virtual:uno.css'

// 全局api接口
import api from '@/api'

import App from './App.vue'
import router from './router'

import 'element-plus/dist/index.css';

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(api)
app.mount('#app')
