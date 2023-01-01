<template>
    <div>
        <p>継承されました</p>
        <p>{{ testName }}</p>
        <p>{{ name }}</p>
    </div>
</template>
<script>
export default{
    data:function(){
        return {
            testName:"テスト"
        }
    },
    props: {
        name: {
            type: String, // String型に限定
            required: true, // 必須項目
        }
    }
}

</script>


<style>
    p{
        color: brown;
    }
</style>