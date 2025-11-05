import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css' // 引入 Element Plus 全局样式
import App from './App.vue'

// 创建 Vue 应用并使用 Element Plus
const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')