<template>
    <div class = "backtop" >
      <img src="~assets/imgs/common/top.png" alt="">
    </div>
</template>

<script>
    export default {
        name: "BackTop",
        data() {
            return {}
        },
        component: {},
    }
</script>

<style scoped>
  .backtop{
    position: fixed;
    bottom: 80px;
    right: 0;
  }
  .backtop img{
    width: 50px;
    height: 50px;
  }
</style>
