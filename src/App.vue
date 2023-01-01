<!-- テンプレートを表示させること -->
<!-- id忘れがち -->
<!-- タグ忘れがち -->
<template>
  <div id="app">
    <HeaderComponents :name=checkName :number=checkNumber :profile=myProfile></HeaderComponents>
  </div>
</template>

<script>
// 継承したい時は、前回と同じように、テンプレートを継承しよう
import HeaderComponents from "./components/HeaderComponents.vue"
// 継承したい時は、インポートしたcomponentを使って、テンプレートを継承しよう
export default{
  data:function(){
    return {
      checkName:"谷口",
      checkNumber:200,
      myProfile:{name:"谷口",address:"神奈川県"}
    }
  },
  components: {
    HeaderComponents
  }
}
</script>