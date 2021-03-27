<template>
    <div class="container">
      <nav-bar class="navbar">
        <div slot="center">购物车({{this.$store.state.cartList.length}})</div>
      </nav-bar>

        <scroll class="content" ref="scroll" v-if="this.$store.state.cartList.length">
         <cart-good-list></cart-good-list>
        </scroll>
        <div v-else class="emptycart">
          <img src="~assets/imgs/cart/emptycart.png" alt="">
          <div class="emptycarttext" @click="goshop"><span>去逛逛</span></div>
        </div>
      <cart-bottom-bar class="cartbottombar" v-if="this.$store.state.cartList.length"></cart-bottom-bar>
    </div>
</template>

<script>

  import NavBar from "components/common/navbar/NavBar";
  // import {mapGetters} from 'vuex'
  import CartGoodList from './gouwuchechild/CartGoodList'
  import Scroll from "../../components/common/scroll/scroll";
  import CartBottomBar from "./gouwuchechild/CartBottomBar";
  export default {
    name: 'gouwuche',
    components: {
      CartBottomBar,
      Scroll,
      NavBar,
      CartGoodList,
    },
    data(){
      return{
      }
    },
    computed:{
      // //2种写法
      //
      // //1.
      // // ...mapGetters(['cartlistLength','cartList']),
      // //2.
      // ...mapGetters({
      //   length:'cartlistLength',
      //   list:'cartList'
      // })

    },
    created() {
      this.$nextTick(()=>{

      })
    },
    mounted() {
    },
    updated() {

    },
    activated() {
      if ( this.$store.state.cartList.length ){
        this.$refs.scroll.refresh()
      }
    },
    methods:{
      goshop(){
        this.$router.replace('/shouye')
      }
    }

  }
</script>

<style scoped>
  .container{
    height: 100vh;
  }
  .navbar{
    color: white;
    background: linear-gradient(to right, rgb(242, 112, 156), rgb(255, 148, 114));
  }
  .content{
    position: relative;
    overflow: hidden;
    height: calc(100% - 44px - 40px - 49px);
  }
  .cartbottombar{
    position: absolute;
    bottom: 49px;
  }
  .emptycart{
    width: 100%;
    height: calc(100% - 44px - 49px);
    background-color: rgb(242,242,242);
  }
  .emptycart img{
    width: 100%;
  }
  .emptycarttext{
    font-size: 16px;
    margin-top: 10px;
    color: rgb(111,104,104);
  }
  .emptycarttext span{
    margin: 0 auto;
    display: block;
    width: 80px;
    height: 36px;
    background-color: rgb(248,244,244);
    text-align: center;
    line-height: 36px;
    border: solid 0.5px rgb(208,208,208);

  }
</style>
