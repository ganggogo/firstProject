<template>
    <div class="container">
      <div class="icon">
        <div class="icon-item">
          <div class="img"><img src="~assets/imgs/detail/kefu.svg" alt=""></div>
          <div class="text">客服</div>
        </div>
        <div class="icon-item">
          <div class="img"><img src="~assets/imgs/detail/dianpu.svg" alt=""></div>
          <div class="text">店铺</div>
        </div>
        <div class="icon-item">
          <div class="img"><img src="~assets/imgs/detail/shoucang.svg" alt=""></div>
          <div class="text">收藏</div>
        </div>
      </div>
      <div class="TEXT">
        <div class="gouwuche" @click="addcart">加入购物车</div>
        <div class="buy">立即购买</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "detailBottomBar",
        data() {
            return {}
        },
        components: {},
        methods:{
          addcart(){
            this.$emit('addcart')
          }
        },
    }
</script>

<style scoped>
  .container{
    height: 49px;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
    display: flex;
  }
  .icon{
    display: flex;
    width: 48%;
    justify-content: space-around;
  }
  .icon img{
    width: 28px;
    height: 28px;
  }
  .icon-item{
    /*flex: 1;*/
    /*margin-left: 36px;*/
  }
  .icon-item .text{
    margin-top: -4px;
    font-size: 14px;
    margin-left: 1px;
    padding-bottom: 2px;
  }

  .TEXT{
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    color: white;
    display: flex;
    background-color: red;
    flex: 1;
  }
  .gouwuche{
    background-color: rgb(255,222,15);
    padding: 5px;
    width: 54%;
  }
  .buy{
    background-color: rgb(255,120,154);
    padding: 5px;
    flex: 1;
  }

</style>
