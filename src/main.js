import Vue from 'vue'
import App from './App.vue'

// これはあってもなくても、、
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
