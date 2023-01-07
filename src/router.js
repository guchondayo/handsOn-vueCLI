//ホーム＊ルーター＊遷移先のHTMLファイルはどうするの？コンポーネントですよー
import Vue from 'vue'
import Router from 'vue-router'
import Home from './App.vue'
import Test from './AboutComponents.vue'

//ライブラリを使いますよ宣言をするようなもの
Vue.use(Router)

//ルーターの中身を生成しましょう必要なのは、パスとそのパスに当たるコンポーネントを登録する
export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: Test }
  ]
})

