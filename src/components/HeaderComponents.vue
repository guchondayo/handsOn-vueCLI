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
            this.$emit('catchMessage', this.sendData);
        }
    }
}
</script>
<style>
    p{
        color: brown;
    }
</style>