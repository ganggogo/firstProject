<template>
    <div class="navbar">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="center">
        <slot name="center"></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        data() {
            return {}
        },
        component: {}
    }
</script>

<style scoped>
  .navbar{
    width: 100%;
    display: flex;
    text-align: center;
    height: 44px;
    line-height: 44px;
    font-size: 22px;
    box-shadow: 0 1px 1px rgba(100,100,100,0.1);
  }
  .left,.right{
    /*background-color: rgb(160,245,172);*/
    width: 15%;
  }
  .center{
    flex: 1;
    width: 70%;
    text-align: center;
    /*background-color: rgb(246,219,219);*/
  }
</style>
