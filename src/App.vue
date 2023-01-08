<template>
  <div id="app">
    <HeaderComponents></HeaderComponents>
    {{ receiveData }}
    {{  }}
  </div>
</template>

<script>
// 継承したい時は、前回と同じように、テンプレートを継承しよう
import HeaderComponents from "./components/HeaderComponents.vue"
// 継承したい時は、インポートしたcomponentを使って、テンプレートを継承しよう
export default{
  data:function(){
    return {
      receiveData:""
    }
  },
//コンポねんとは複数登録できる
  components: {
    HeaderComponents
  },
  methods:{

  }

}
// 参考サイト
// https://code-pocket.info/20190915262/

</script>

