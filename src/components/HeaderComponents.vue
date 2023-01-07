<template>
    <div>
       <button v-on:click="sendMessage">ボタンを押してみる</button>
    </div>
</template>
<script>
export default{
    data:function(){
        return {
            sendData:"データが送られました"
        }
    },
    methods:{
        sendMessage:function(){
            console.log("こんにちわ")
            // this.$emit('catchMessage', this.message);
        }
    }
}
</script>
<style>
    p{
        color: brown;
    }
</style>