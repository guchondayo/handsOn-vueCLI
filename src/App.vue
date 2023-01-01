<!-- テンプレートを表示させること -->
<!-- id忘れがち -->
<!-- タグ忘れがち -->
<template>
  <div id="app">
    <HeaderComponents :name="checkName"></HeaderComponents>
  </div>
</template>

<script>
// 継承したい時は、前回と同じように、テンプレートを継承しよう
import HeaderComponents from "./components/HeaderComponents.vue"
// 継承したい時は、インポートしたcomponentを使って、テンプレートを継承しよう
export default{
  data:function(){
    return {
      checkName:{name:"ゆうと",address:"相模原"}
    }
  },
  components: {
    HeaderComponents
  }
}
</script>