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
            postData:"",
            postURL:"https://zipcloud.ibsnet.co.jp/api/search",
            result:""
        }
    },
    created() {
        console.log("created",this.checkData,"DOMを読み取り前",this.$el,"要素が取れない")
        fetch(this.postURL + "?zipcode=2520318").then(function(res){
            return res.json()    
        }).then(function(data){
            console.log(data.results[0])
        })
        console.log("mounted",this.checkData,"DOMを読み取り後",this.$el,"要素が取れる")
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