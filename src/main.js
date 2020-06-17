import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Country from './components/Country.vue'
import displayChart from './components/displayChart.vue'
import '@fortawesome/fontawesome-free/css/all.css'


Vue.config.productionTip = false
Vue.use(VueRouter)

const routes =[
  {path: '/', component: Home},
  {path: '/Country', component: Country},
  {path: '/statistics', component: displayChart},
];

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
