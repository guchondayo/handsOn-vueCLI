<template>
    <div>
        <p>継承されました</p>
        <p>{{ name }}</p> 
        <p>{{ number}}</p> 
        <p>{{ profile.name}}</p> 
        <p>{{ profile.address}}</p>
    </div>
</template>
<script>
export default{
    data:function(){
        return {
        }
    },
    props: {
        name: {
        type: String, // String型に限定
        // required: true, // 必須項目
        },
        number: {
        type: Number, // Number型に限定
        default: 20 // default値を設定
        },
        profile:{
        type: Object //ここ間違えるとエラーになる
        }
    }
}
</script>
<style>
    p{
        color: brown;
    }
</style>