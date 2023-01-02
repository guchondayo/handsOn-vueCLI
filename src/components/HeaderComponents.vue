<template>
    <div>
        <p v-if="getOrNot">表示された</p>
        <p>{{ callNumByMethods() }}</p>
        <p>{{ callNumByComputed }}</p>
        <p>{{ callNumByComputedIfMath }}</p>
        <p>{{ callNumByComputedIfMath }}</p>
    </div>
</template>
<script>
export default{
    data:function(){
        return {
            getOrNot:true
        }
    },
    methods:{
        callNumByMethods:function(){
            return 100;
        },
    },
    computed: {
            callNumByComputed: function () {
            return  200 + 300
            },
            callNumByComputedIfMath: function () {
            return  Math.random()
            }
    }
    //よくある凡ミスとして、computedをメソッドの中に格納してしまう
}
</script>
<style>
    p{
        color: brown;
    }
</style>