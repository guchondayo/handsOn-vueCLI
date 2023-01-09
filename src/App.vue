<template>
  <div id="app">
    <HeaderComponents></HeaderComponents>
    {{ receiveData }}
  </div>
</template>

<script>
// 継承したい時は、前回と同じように、テンプレートを継承しよう
import HeaderComponents from "./components/HeaderComponents.vue"
// 継承したい時は、インポートしたcomponentを使って、テンプレートを継承しよう

import store from "./store"
export default{
  data:function(){
    return {
      receiveData:store.state.messeage,
    }
  },
//コンポねんとは複数登録できる
  components: {
    HeaderComponents
  },
}
// 正直いうと、本当はこのやり方で実装したかった。
// https://shimablogs.com/vuecli-built-environment

// でもこうやって、エクスポートしたデータをインポートしながらしかできないんだなと実感した
// https://stackoverflow.com/questions/41063959/why-is-store-not-defined

// ＊store.jsというところにデータを格納する
// ＊モジュールをインポートすればデータの使い回しが簡単にできる
// 普通にエクスポートするだけじゃダメなのかな？

</script>

