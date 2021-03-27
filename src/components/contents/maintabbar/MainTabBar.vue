<template>
    <div>
        <tab-bar>
            <tab-bar-item path="/shouye">
                <div slot="img" ><img src = "~assets/imgs/tabbar/shouye.svg"></div>
                <div slot="img-active" ><img src = "~assets/imgs/tabbar/shouye-active.svg"></div>
                <div slot="text" >首页</div>
            </tab-bar-item>
            <tab-bar-item path="/fenlei">
                <div slot="img" ><img src = "~assets/imgs/tabbar/fenlei.svg"></div>
                <div slot="img-active" ><img src = "~assets/imgs/tabbar/fenlei-active.svg"></div>
                <div slot="text" >分类</div>
            </tab-bar-item>
            <tab-bar-item path="/gouwuche">
                <div slot="img" ><img src = "~assets/imgs/tabbar/gouwuche.svg"></div>
                <div slot="img-active" ><img src = "~assets/imgs/tabbar/gouwuche-active.svg"></div>
                <div slot="text" >购物车</div>
            </tab-bar-item>
            <tab-bar-item path="/wode">
                <div slot="img" ><img src = "~assets/imgs/tabbar/wode.svg"></div>
                <div slot="img-active" ><img src = "~assets/imgs/tabbar/wode-active.svg"></div>
                <div slot="text" >我的</div>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>

<script>
  import TabBarItem from "components/common/tabbar/TabBarItem"
  import TabBar from "components/common/tabbar/Tabbar"
  export default {
    name: 'MainTabBar',
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
