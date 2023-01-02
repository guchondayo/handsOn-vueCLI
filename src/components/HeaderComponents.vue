<template>
    <div>
        <p v-if="getOrNot">表示された</p>
        <!-- <p v-show="getOrNot">表示された</p> -->
        <!-- //v-forの書き方がめんどくさい。配列出力するだけども、indexがいるということを念頭においておかなければならない -->

    </div>
</template>
<script>
export default{
    data:function(){
        return {
            getOrNot:true
        }
    }
}
</script>
<style>
    p{
        color: brown;
    }
</style>