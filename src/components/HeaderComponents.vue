<template>
    <div>
        <p>継承されました</p>
        <p>{{ name.name }}</p> 
        <p>{{ name.address }}</p>         
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