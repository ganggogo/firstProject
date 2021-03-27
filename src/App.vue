<template>
  <div id="app">
    <!--这里的exclude要把Detail组件排除在外，不然点击商品，每次点击携带的id都是一样的，不然每个Detail都是保持keep-alive，显示的都是第一次的图片-->
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from "components/contents/maintabbar/MainTabBar"
  export default {
    name: 'App',

    components:{
      MainTabBar
    }
  }
</script>
<!--style里面要加分号嗷-->
<style>
  @import "assets/css/base.css";
</style>
