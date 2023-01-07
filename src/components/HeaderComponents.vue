<template>
    <div>
       <input type="text" v-model=checkModel />
       <input type="text" v-model=checkModel />
       <router-view></router-view>
       <!-- 画面遷移がめちゃ楽になる -->
       <router-link to="/about">About</router-link>
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