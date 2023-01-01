//Vueをあらかじめインストールしていれば、new VueのVueをインストールすることができる
import Vue from "vue";
//Vueファイルにテンプレートと処理を切り出すには、vueファイルを継承
import App from "./App";
// インポートしておけばVueが生成できる
new Vue({
  el:"#app",
  render:function(r){
    return r(App)
  }
})
//テンプレートを表示するにはrenderしてあげないとだめ
// IDの紐付け忘れがち
