<template>
    <div class="fenlei">
      <fenleinavbar class="fenleinavbar"></fenleinavbar>
      <div class="bodydiv">
        <scroll class="content" ref="scroll">
          <celan :celandata="celandata"></celan>
        </scroll>
        <router-link to="/fenlei/remaibangdan"></router-link>
        <router-link to="/fenlei/xinpinguan"></router-link>
        <router-link to="/fenlei/chaoliuguan"></router-link>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
</template>

<script>
  import Celan from "./fenleichild/celan";
  import Scroll from "../../components/common/scroll/scroll";
  import Fenleinavbar from "../../components/common/fenleinavbar/fenleinavbar";
  import Fenleiswiper from "./fenleichild/fenleiswiper";
  export default {
    name: 'fenlei',
    components: {Fenleiswiper, Fenleinavbar, Scroll, Celan,},
    data() {
      return {
        celandata:[
          {name:'热卖榜单',path:'remaibangdan'},
          {name:'新品馆',path:'xinpinguan'},
          {name:'潮流馆',path:'chaoliuguan'},
          {name:'淑女馆',path:'shunvguan'},
          {name:'国风馆',path:'guofengguan'},
          {name:'羽绒馆',path:'yurongguan'},
          {name:'羊绒衫',path:'yangrongshan'},
          {name:'棉服',path:'mianfu'},
          {name:'连衣裙',path:'lianyiqun'},
          {name:'运动裤',path:'yundongku'},
          {name:'阔腿裤',path:'kuotuiku'},
          {name:'哈伦裤',path:'halunku'},
          {name:'工装裤',path:'gongzhuangku'},
          {name:'牛仔裤',path:'niuzaiku'},
          {name:'加绒裤',path:'jiarongku'},
          {name:'打底裤',path:'dadiku'},
          {name:'小脚裤',path:'xiaojiaoku'},
          {name:'休闲裤',path:'xiuxianku'},
          {name:'汉服',path:'hanfu'},
          {name:'旗袍',path:'qipao'},
          {name:'礼服',path:'lifu'},
          {name:'婚纱',path:'hunsha'},
        ],
        path:''
      }
    },
    activated() {
      this.$refs.scroll.scrollTo(0,scrollY,0)
      this.$refs.scroll.refresh()
      // this.$router.replace(this.path)
      console.log(this.$route.path)
    },
    deactivated() {
      scrollY = this.$refs.scroll.scroll.y
      // console.log(scrollY)
      // this.path = this.$route.path
      console.log(this.$route.path)
    }

  }
</script>

<style scoped>
  .div{
    height: 44px;
    width: 100%;
    overflow: hidden;
  }
  .fenlei{
    height: 100vh;
  }
  .fenleinavbar{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 44px;
    width: 100%;
    overflow: hidden;
  }
  .bodydiv{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    height: calc(100vh - 44px - 49px);
    display: flex;
    background-color: rgb(247,247,247);
  }
  .content{
    width: 25%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    margin-top: 5px;
  }
  /*.contentmain{*/
  /*  width: 75%;*/
  /*  position: absolute;*/
  /*  left: 25%;*/
  /*  top: 0;*/
  /*  bottom: 0;*/
  /*  overflow: hidden;*/
  /*  background-color: white;*/
  /*  border-radius: 16px;*/
  /*  margin-top: 5px;*/
  /*  padding-top: 5px;*/
  /*}*/
</style>
