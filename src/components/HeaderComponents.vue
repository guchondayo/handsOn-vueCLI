<template>
    <div>
        <p>ボタンをクリック</p>
    </div>
</template>
<script>
export default{
    data:function(){
        return {
            checkData:"成功",
            // postData:"",
            // postURL:"https://zipcloud.ibsnet.co.jp/api/search"
        }
    },
    created() {
        console.log("created",this.checkData,"DOMを読み取り前",this.$el,"要素が取れない")

    },
    mounted(){
        console.log("mounted",this.checkData,"DOMを読み取り後",this.$el,"要素が取れる")
    }
}
</script>
<style>
    p{
        color: brown;
    }
</style>