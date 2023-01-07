//Vueをあらかじめインストールしていれば、new VueのVueをインストールすることができる
import Vue from "vue";
//Vueファイルにテンプレートと処理を切り出すには、vueファイルを継承
import App from "./App";
//持ってきたコンポーネントを登録しよう
import routes from "./router.js"

//routerを追加する
new Vue({
  el:"#app",
  router:routes,
  render:function(r){
    return r(App)
  }
})

// router:routesの書き方ずっと間違えていた,
// https://qiita.com/soo_chan11/items/c914bf54f9240b5616f1

