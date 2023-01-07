//Vueをあらかじめインストールしていれば、new VueのVueをインストールすることができる
import Vue from "vue";
//Vueファイルにテンプレートと処理を切り出すには、vueファイルを継承
import App from "./App";

import routes from "./router.js"

//routerを追加する
new Vue({
  el:"#app",
  router:routes,
  render:function(r){
    return r(App)
  }
})

