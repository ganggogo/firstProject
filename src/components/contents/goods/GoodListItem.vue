<template>
    <div class="goods-item" @click="toDetail">
      <img v-lazy="showImg" alt="" class="mainImg" @load="imgLoad">
      <div class="goods-info">
        <p>{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.price}}</span>
        <span class="collectsvg"><img src="~assets/imgs/common/collect.svg" alt=""></span>
        <span class="collect">{{goodsItem.cfav}}</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "GoodListItem",
        props:{
          goodsItem:{
            type:Object,
            default(){
              return {}
            }
          }
        },
        data() {
            return {}
        },
        component: {},
        computed:{
          showImg(){
            return this.goodsItem.image || this.goodsItem.show.img   //注意顺序问题
          }
        },
        methods:{
          imgLoad(){
            // this.$bus.$emit('itemImgLoad')
            //这里如果详情页也复用了goodList组件，那么其实详情页推荐里面的图片加载完后是不需要在首页执行一次scroll的refresh函数的
            if ( this.$route.path.includes('/shouye') ){
              this.$bus.$emit('homeItemImgLoad')
            }else if(this.$route.path.includes('/detail')){
              this.$bus.$emit('detailItemImgLoad')
            }
          },
          toDetail(){
            console.log("进入详情页")
            this.$router.push("/detail/" + this.goodsItem.iid )
          }
        },
    }
</script>

<style scoped>
  .goods-item{
    width: 48%;
    margin-bottom: 10px;
  }
  .goods-item .mainImg{
    width: 100%;
    border-radius: 5px;
    border: 1px solid hotpink;
  }
  .goods-item .goods-info{
    text-align: center;
  }
  .goods-item .goods-info p{
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 3px;
  }
  .goods-item .goods-info .price{
    color: hotpink;
    margin-right: 20px;
  }
  .goods-item .goods-info .collectsvg img{
    margin-top: 4px;
    display: inline-block;
    width: 14px;
    height: 14px;
  }
</style>
