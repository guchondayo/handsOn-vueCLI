<template>
    <div>
        <p>以下をクリックすると中身が検知されます</p>
        <button v-on:click="checkConsole()">中身を確認</button>
    </div>
</template>
<script>
export default{
    data:function(){
        return {
            result:true
        }
    },
    watch:{
        result:function(newVal, oldVal){
            console.log(newVal,oldVal)
            console.log("変化を感知いたしました")
        }
    },
    methods:{
        checkConsole:function(){
            if(this.result === true){
                this.result = false
            }else{
                this.result = true
            }
            console.log(this.result)
            return this.result
        }
    }
}
</script>
<style>
    p{
        color: brown;
    }
</style>