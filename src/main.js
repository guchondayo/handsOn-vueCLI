//Vueをあらかじめインストールしていれば、new VueのVueをインストールすることができる
import Vue from "vue";
//Vueファイルにテンプレートと処理を切り出すには、vueファイルを継承
import App from "./App";
import AboutComponents from "./AboutComponents";
import VueRouter from "vue-router"

Vue.use(VueRouter)

let routes = [
  { 
      path: '/about',
      name: 'aba',
      component: AboutComponents 
  },
]

//routerを追加する
new Vue({
  el:"#app",
  routes,
  render:function(r){
    return r(App)
  }
})

