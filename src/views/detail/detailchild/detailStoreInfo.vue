<template>
    <div class="store-info">
      <div class="store-top">
        <img class="store-top-img" :src="shop.log" alt="">
        <span class="store-top-name"><b>{{shop.name}}</b></span>
      </div>
      <div class="store-middle">
        <div class="store-middle-left">
          <div class="store-middle-left-left">
            <div class="store-middle-left-left-t">
              <b>{{sells}}</b>
            </div>
            <div class="store-middle-left-left-b">
              总销量
            </div>
          </div>
          <div class="store-middle-left-right">
            <div class="store-middle-left-right-t">
              <b>{{shop.goodsCount}}</b>
            </div>
            <div class="store-middle-left-right-b">
              全部宝贝
            </div>
          </div>
        </div>
        <div class="store-middle-right">
          <table class="store-info-table">
            <tr v-for="(item) in shop.score">
              <td>{{item.name}}</td>
              <td class='low' :class = "{'high':item.isBetter}">{{item.score}}</td>
              <td class='low' :class = "{'high':item.isBetter}">{{item.isBetter ? '高' : '低'}}</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="inToStore">
        <div class="inToStore-inner">
          进店逛逛
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "detailStoreInfo",
        props:{
          shop:{
            type:Object,
            default(){
              return {
              }
            }
          },
        },
        data() {
          return{
          }
        },
        components: {},
        computed:{
          sells() {
            return  (this.shop.sells/10000).toFixed(1) + "万"
          },
        },
      updated() {
      }
    }
</script>

<style scoped>
  .store-top-img{
    margin: 5px 10px;
    width: 100px;
    height: 100px;
    border: solid rgb(238,238,238) 1px;
    border-radius: 50px;
  }
  .store-top-name{
    font-size: 26px;
    vertical-align: 50px;
  }
  .store-middle{
    display: flex;
  }
  .store-middle-left{
    display: flex;
    border-right: solid 1px rgb(157,157,157);
    height: 80px;
    width: 200px;
    margin-top: 28px;
    margin-left: 20px;
    margin-right: 20px;
    padding-top: 14px;
  }
  .store-middle-left-right{
    width: 80px;

  }
  .store-middle-left-left{
    margin: 0px 10px;

  }
  .store-middle-left-left-t{
    font-size: 26px;
    text-align: center;
  }
  .store-middle-left-left-b{
    font-size: 15px;
    text-align: center;
  }
  .store-middle-right{
  }
  .store-middle-left-right-t{
    font-size: 26px;
    text-align: center;

  }
  .store-middle-left-right-b{
    font-size: 15px;
    text-align: center;
  }
  .store-info-table{
    height: 150px;
    width: 150px;
    font-size: 16px;
  }
  .low{
    color: rgb(251,0,0);
  }
  .high{
    color: rgb(62,183,12);
  }
  .inToStore{
    width: 100%;
    font-size: 17px;
    color: rgb(100,100,100);
    padding-bottom: 30px;
    border-bottom: solid 6px rgb(243,233,233);
  }
  .inToStore-inner{
    margin: 0 auto;
    width: 180px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    background-color: rgb(238,238,238);
  }


</style>
