<template>
    <div class="common" v-if="Object.keys(common.goodscommon).length !== 0">
      <div class="common-top">
        <span class="common-top-left">买家评价 ({{common.commonnum}})</span>
        <span class="common-top-right"><a href="#">查看更多>></a></span>
      </div>
      <div class="commonitem">
        <div class="userinfo">
          <img class="userimg" :src="common.goodscommon.user.avatar" alt=""><span class="username">{{common.goodscommon.user.uname}}</span>
        </div>
        <div class="commoninfo-text">
          {{common.goodscommon.content}}
        </div>
        <div class="buyedinfo">
          <span class="time">{{common.goodscommon.created | showDate}}</span><span>{{common.goodscommon.style}}</span>
        </div>
        <div class="commoninfo-img">
          <div class="commoninfo-img-item" v-for="item in common.goodscommon.images"><img :src="item" alt=""></div>
        </div>
      </div>
    </div>
</template>

<script>
    import {formatDate} from 'common/utils.js'
    export default {
        name: "detailGoodsCommon",
        data() {
            return {}
        },
        components: {},
        props:{
          common:{
            type:Object,
            default(){
              return{}
            }
          }
        },
      filters:{
        showDate(value){
          //1.现将时间戳转换为时间对象
          const date = new Date(value * 1000)

          //2.将date格式化
          return formatDate(date,'yyyy-MM-dd HH:mm:ss')
        }
      }
    }
</script>

<style scoped>
  .common{
    border-bottom: solid 2px rgb(243,233,233);
  }
  .common-top{
    height: 40px;
    border-bottom: solid 2px rgb(243,233,233);
    font-size: 20px;
    line-height: 40px;
    padding: 0 15px;
  }
  .common-top-left{
    float: left;
  }
  .common-top-right{
    float: right;
  }
  .common-top-right a{
    text-decoration: none;
    color: deeppink;
  }
  .commonitem{
    padding: 10px 15px;
  }
  .userinfo img{
    width: 80px;
    height: 80px;
    border-radius: 40px;
    vertical-align: -40px;
    border: rgb(244,194,194) 1px solid;
  }
  .username{
    margin-left: 8px;
  }
  .commoninfo-text{
    padding: 10px ;
    border-bottom: solid 1px rgb(243,233,233);
  }
  .commoninfo-img{
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  .commoninfo-img-item{
    padding: 5px;
  }
  .commoninfo-img-item img{
    width: 100%;
    height: 100%;
  }
  .buyedinfo{
    padding: 0 10px 10px 10px;
    color:rgb(157,157,157);
    font-size: 15px;
  }
  .time{
    margin-right: 6px;
  }
</style>
