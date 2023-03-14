import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { useDataStore } from './stores/data'

const pinia = createPinia()

const app = createApp(App)

app.use(pinia)
app.use(router)

const dataStore = useDataStore()
dataStore.setDataToStore()

app.mount('#app')
