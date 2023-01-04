<template>
    <div>
       <input type="text" v-model=checkModel />
       <input type="text" v-model=checkModel />
    {{ checkModel }}
        <!-- <p v-show="getOrNot">表示された</p> -->
        <!-- //v-forの書き方がめんどくさい。配列出力するだけども、indexがいるということを念頭においておかなければならない -->

    </div>
</template>
<script>
export default{
    data:function(){
        return {
            getOrNot:true,
            checkModel:""
        }
    },
    watch:{
        checkModel:function(val){
            console.log(val)
        }
    }
}
</script>
<style>
    p{
        color: brown;
    }
</style>