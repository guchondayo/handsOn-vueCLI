import Vue from 'vue'
import Router from 'vue-router'
import Home from './App.vue'
import Test from './AboutComponents.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: Test }
  ]
})

