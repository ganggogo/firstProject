<template>
    <div id="home">
      <nav-bar class="shouye-nav"><div slot="center" >购物街</div></nav-bar>

      <TabControl
        :titles="['流行','新款','精选']"
        @tabIndex = "showActiveIndex"
        ref="tabcontroltop"
        v-show="istabControlFixed"
        class="tabcontrol"
      >
      </TabControl>
      <scroll
        class="content"
        ref="scroll"
        :probe-type="3"
        @scroll="contentScroll"
        :pull-up-load="true"
        @pullingUp = "contentPullingUp"
      >
        <home-swiper :banners="banners" @swiperImgLoad = "swiperImgLoad"></home-swiper>
        <recommend-view :recommends="recommends"></recommend-view>
        <FeatureViews></FeatureViews>
        <TabControl
          :titles="['流行','新款','精选']"
          @tabIndex = "showActiveIndex"
          ref="tabcontrolbottom"
        >

        </TabControl>
        <GoodList :goods="showgoods" ></GoodList>
      </scroll>
      <back-top @click.native="backtop" v-show = "isShowBackTop"></back-top>

    </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
  import TabControl from "components/contents/tabcontrol/TabControl";
  import GoodList from "components/contents/goods/GoodList";
  import Scroll from "components/common/scroll/scroll";
  import BackTop from "components/common/backtop/BackTop";



  import HomeSwiper from "./homechild/HomeSwiper"
  import RecommendView from "./homechild/RecommendView"
  import FeatureViews from "./homechild/FeatureViews"

  import {getHomeMultidata,getHomeGoods} from "network/home";
  import {debounce} from "common/utils";

  export default {
    name: 'shouye',
    data(){
      return {
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        currentType:"pop",
        isShowBackTop:false,
        tabOffsetTop:0,
        istabControlFixed:false,
        scrollY:0
      }
    },
    components:{
      BackTop,
      Scroll,
      GoodList,
      TabControl,
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureViews
    },
    created() {
      //1.请求多个数据
      this.getHomeMultidata()
      //2.请求商品数据
      this.getHomeGoods('pop')

      this.getHomeGoods('new')

      this.getHomeGoods('sell')


    },
    mounted() {
      const newRefresh =debounce(this.$refs.scroll.refresh,5)
        //1.监听goodlistitem里面的图片加载完成
        this.$bus.$on('homeItemImgLoad',()=>{
          this.$refs.scroll && newRefresh()  //细节写法
      })

      //在这里那数据肯定不合适，虽然组件都挂在了，但是图片没有加载完
      //2.获取tabcontrol的offsetTop值
      //所有的组件都有一个属性$el,用于获取组件中的元素
      // console.log(this.$refs.tabControl.$el.offsetTop);
    },
    computed:{
      showgoods(){
        return this.goods[this.currentType].list
      }
    },
    methods:{
      /*
      * 事件处理
      * */


      showActiveIndex(index){
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell'
                break;
        }

        //控制上下两个tabcontrol的activeIndex同步
        this.$refs.tabcontroltop.currentIndex = index
        this.$refs.tabcontrolbottom.currentIndex = index
      },
      backtop(){
          this.$refs.scroll.scrollTo(0,0)
      },
      contentScroll(position){
        // console.log(position)   //position是一个对象，里面包含xposition和yposition
        //1.判断返回顶部按钮是否显示
        this.isShowBackTop = (-position.y) > 1000
        //2.决定tabcontrol是否吸顶(position：fixed)
        this.istabControlFixed = (-position.y) > this.tabOffsetTop
      },
      contentPullingUp(){
        console.log('上拉加载更多...')
        this.getHomeGoods(this.currentType)
      },
      swiperImgLoad(){
        // console.log(this.$refs.tabcontrol.$el.offsetTop)
        this.tabOffsetTop = this.$refs.tabcontrolbottom.$el.offsetTop
      },


      /*
      * 网络请求方法
      * */

      getHomeMultidata(){
        getHomeMultidata().then(res=>{
          // console.log(res)
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res=>{
          console.log(res)
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
          //完成一次加载更多
          this.$refs.scroll.finishPullUp()
        })
      }
    },
    destroyed() {
      // console.log('组件已被销毁...')
    },
    activated() {
      this.$refs.scroll.scrollTo(0,scrollY,0)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      scrollY = this.$refs.scroll.scroll.y
      // console.log(scrollY)
    }
  }
</script>

<style scoped>
  #home{
    height: 100vh;
    position: relative;
  }
  .shouye-nav{
    line-height: 44px;
    color: white;
    background: linear-gradient(to right, rgb(242, 112, 156), rgb(255, 148, 114));

    /*使用js原生滚动时这样写是为了不让他和内容一起滚动，现在用的是better-scroll局部滚动，所以不需要了*/
    /*position: fixed;*/
    /*top: 0;*/
    /*left: 0;*/
    /*z-index: 99;*/
  }

  /*还是没用*/
  /*.fixed{*/
  /*  position: fixed;*/
  /*  right: 0;*/
  /*  left: 0;*/
  /*  top: 44px;*/
  /*}*/
  /*================失效了=======================*/
  /*.tab-control{*/
  /*  background-color: #fff;*/
  /*  position: sticky;   !*默认是sticky属性，当top达到值的时候会自动切换到fixed  移动端都支持*!*/
  /*  top: 44px;*/
  /*  z-index: 100;*/
  /*}*/
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  .tabcontrol{
    position: relative;
    z-index: 99;
    background-color: #fff;
  }
</style>
