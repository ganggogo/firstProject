
<template>
    <div class="detail">
      <detail-nav-bar ref="detailnavbar" class="navbar" @detailnavbaritem="detailnavbaritem"></detail-nav-bar>
      <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3">
        <detail-swiper :swiperimg="detailswiperimg"></detail-swiper>
        <detailshop-info :goods="goods"></detailshop-info>
        <detail-store-info :shop="shop"></detail-store-info>
        <detail-goods-info :detailinfo="detailinfo" @imgLoad="imgLoad"></detail-goods-info>
        <detail-params-info ref="params" :goodsparams="goodsparams"></detail-params-info>
        <detail-goods-common ref="common" :common="common" v-if="common.commonnum !== 0"></detail-goods-common>
        <no-common ref="common" v-else></no-common>
        <detail-guess-your-like ref="guess"></detail-guess-your-like>
        <good-list ref="recommend" :goods="recommends"></good-list>
<!--        <div class="h3" style="color: rgb(149,149,149)"><h3>我也是有底线的...</h3></div>-->
      </scroll>
      <detail-bottom-bar class="detailbottombar" @addcart="addcart"></detail-bottom-bar>
      <back-top @click.native="backtop" v-show = "isShowBackTop" class="back"></back-top>
<!--      <Toast :is-show="isShow" :message="message" class="toast"></Toast>-->
    </div>
</template>

<script>
    import DetailNavBar from "./detailchild/detailNavBar";
    import DetailSwiper from "./detailchild/detailSwiper";
    import DetailshopInfo from "./detailchild/detailShopInfo";
    import DetailStoreInfo from "./detailchild/detailStoreInfo";
    import DetailGoodsInfo from "./detailchild/detailGoodsInfo"
    import {getDetail,Goods,Shop,GoodsParams,getRecommend} from "network/detail";
    import Scroll from "../../components/common/scroll/scroll";
    import DetailParamsInfo from "./detailchild/detailParamsInfo";
    import DetailGoodsCommon from "./detailchild/detailGoodsCommon";
    import NoCommon from "./detailchild/NoCommon";
    import GoodList from "components/contents/goods/GoodList";
    import BackTop from "components/common/backtop/BackTop";
    import DetailGuessYourLike from './detailchild/detailGuessYourLike'
    import {debounce} from "common/utils.js"
    import DetailBottomBar from "./detailchild/detailBottomBar";
    // import Toast from "../../components/common/toast/Toast";

    export default {
      name: "Detail",
      components: {
        // Toast,
        DetailBottomBar,
        BackTop,
        GoodList,
        DetailGoodsCommon,
        DetailParamsInfo,
        Scroll,
        DetailStoreInfo,
        DetailshopInfo,
        DetailSwiper,
        DetailNavBar,
        DetailGoodsInfo,
        NoCommon,
        DetailGuessYourLike
      },
      data() {
            return {
              iid:null,
              detailswiperimg:[],
              goods: {},
              shop:{},
              detailinfo:{},
              goodsparams:{},
              common:{
                goodscommon:{},
                commonnum:0
              },
              recommends:[],
              isShowBackTop:false,
              navbaritemtopY:[],
              getnavbaritemtopY:null,
              currentIndex:0,
              // isShow: null,
              // message:null
            }
        },
        created() {
          //1.保存传入的iid
          this.iid = this.$route.params.iid
          console.log(this.iid)
          //2.根据iid请求详情数据
          getDetail(this.iid).then(res=>{
            console.log(res);
            const data = res.result
            this.detailswiperimg = data.itemInfo.topImages
            //2.1.获取商品信息
            this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
            //2.2.获取店铺信息
            this.shop = new Shop(data.shopInfo)
            //2.3.获取商品的详情数据
            this.detailinfo = data.detailInfo
            //2.4.获取参数信息
            this.goodsparams = new GoodsParams(data.itemParams.info,data.itemParams.rule)
            //2.5.获取评论信息
            if ( data.rate.cRate !==0 ){
              this.common.goodscommon = data.rate.list[0]
              this.common.commonnum = data.rate.cRate
            }



            //淘汰！图片没加载完！！！！！
            // this.$nextTick(()=>{
            //
            // })
          })
          //3.请求推荐数据
          getRecommend().then(res=>{
            console.log(res)
            this.recommends = res.data.list
          })

          //4.将获取detailnavbaritem的offsetTop值的代码放进防抖函数
          //其实没必要？？因为在detailGoodsInfo组件里面已经对imgLoad函数做出了处理，等图片全加载完再发出事件分发到detail组件
          this.getnavbaritemtopY = debounce(()=>{
            //每次赋值给navbaritemtopY数组清空
            this.navbaritemtopY = []
            this.navbaritemtopY.push(0)
            this.navbaritemtopY.push(this.$refs.params.$el.offsetTop)
            this.navbaritemtopY.push(this.$refs.common.$el.offsetTop)
            this.navbaritemtopY.push(this.$refs.guess.$el.offsetTop)
            console.log(this.navbaritemtopY)
          },1000)
        },
      methods:{
        //详情页商品图片加载
        imgLoad(){
          this.$refs.scroll.refresh()
          this.getnavbaritemtopY()
        },
        backtop(){
          this.$refs.scroll.scrollTo(0,0)
        },
        contentScroll(position){
          // console.log(position)   //position是一个对象，里面包含xposition和yposition
          //1.判断返回顶部按钮是否显示
          this.isShowBackTop = (-position.y) > 1000

          //2.根据滚动动态显示detailnavbarItem的颜色
          for ( let  i = 0 ; i < this.navbaritemtopY.length ; i ++){

            //其实不用这么复杂的比较，可以直接在navbaritemtopY数组后面加上一个js里面的最大值，就好咯
            if ( (this.currentIndex !== i) && ((i < this.navbaritemtopY.length-1) && (-position.y >= this.navbaritemtopY[i] && -position.y < this.navbaritemtopY[i+1])) ){
              this.currentIndex = i
              console.log(this.currentIndex)
            }
            else if ( (this.currentIndex !== i) && (i ===  this.navbaritemtopY.length-1 && -position.y >= this.navbaritemtopY[this.navbaritemtopY.length-1]) ){
              this.currentIndex = this.navbaritemtopY.length-1
              // console.log(this.navbaritemtopY.length-1)
            }
            this.$refs.detailnavbar.currentIndex = this.currentIndex
          }
        },
        detailnavbaritem(index){
          this.$refs.scroll.scrollTo(0,-this.navbaritemtopY[index],300)
        },
        addcart(){
          //1.获取购物车需要展示的信息
          const goodsinfo = {}
          goodsinfo.image = this.detailswiperimg[0]
          goodsinfo.title = this.goods.title
          goodsinfo.desc = this.goods.desc
          goodsinfo.price = this.goods.realprice
          goodsinfo.iid = this.iid

          //2.将商品保存到购物车

          //不要在这写，修改任何state里面的东西都要在mutation里面写
          // this.$store.cartList.push(goodsinfo)
          this.$store.dispatch('addcart1',goodsinfo).then(res=>{
            this.$toast.show(res)

            /*
            console.log(res)
            this.message = res
            this.isShow = true
            setTimeout(()=>{
              this.isShow = false
            },2000)
             */
          })


          //弹出toast提示框

          //2.1.商品添加到购物车的时候弹出一个toast提示框，显示添加成功或者失败，但是怎么监听添加购物车有没有成功呢，
          // 这里的dispatch会返回一个promise对象，利用这个promise对象来做判断
        }
      },
      mounted(){
        const newRefresh = debounce(this.$refs.scroll.refresh,1000)
        //1.监听goodlistitem里面的图片加载完成
        this.$bus.$on('detailItemImgLoad',(value)=>{
          newRefresh()  //细节写法
        })
      }
    }
</script>

<style scoped>
  .detail{
    position: relative;
    z-index: 99;
    background-color: #fff;
    height: 100vh;
  }
  .content{
    /*height: calc(100% - 44px - 49px);*/
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    z-index: 98;
    overflow: hidden;
  }
  .navbar{
    position: relative;
    z-index: 99;
    background-color: #fff;
  }
  .back{
    z-index: 100;
  }
  .detailbottombar{
    position: absolute;
    bottom: 0px;
    left: 0;
    /*background-color: red;*/
    z-index: 999;
  }

  /*.h3{*/
  /*  width: 100%;*/
  /*  margin-bottom: 49px;*/
  /*  position: fixed;*/
  /*  bottom: -49px;*/
  /*  left: 0;*/
  /*  text-align: center;*/
  /*  z-index: 1;*/
  /*}*/
</style>
