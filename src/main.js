import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'
import Saldo from './Saldo.vue'
import './style.css'
import './main.css'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/saldo', name: 'saldo', component: Saldo },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes, // short for `routes: routes`
})

const app = createApp(App)
app.use(router)
app.mount('#app')
