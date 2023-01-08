//Vueをあらかじめインストールしていれば、new VueのVueをインストールすることができる
import Vue from "vue";
//Vueファイルにテンプレートと処理を切り出すには、vueファイルを継承
import App from "./App";


new Vue({
  el:"#app",
  render:function(r){
    return r(App)
  }
})