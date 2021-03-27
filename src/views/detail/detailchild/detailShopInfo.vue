<template>
    <div class="detailshopinfo" v-if="Object.keys(goods).length !== 0">
      <div class="detailshopinfotitle"><b>{{goods.title}}</b></div>
      <div class="detailshopinfoprice">
        <div class="price1">{{goods.newPrice}}</div>
        <div class="price2">{{goods.oldPrice}}</div>
        <div class="price3">{{goods.discount}}</div>
      </div>
      <div class="detailshopinfodetail">
        <span class="detail">{{goods.columns[0]}}</span>
        <span class="detail">{{goods.columns[1]}}</span>
        <span class="detail">{{goods.services[goods.services.length-1].name}}</span>
      </div>
      <div  class="detailshopinfoexpress">
        <span v-for="index in goods.services.length-1" :key="index">
          <span><img :src="goods.services[index-1].icon" alt="" class="detailshopinfoexpressimg" ></span>
          <span class="detailshopinfoexpresstext">{{goods.services[index-1].name}}</span>
        </span>
      </div>

    </div>
</template>

<script>
    export default {
        name: "DetailshopInfo",
        props:{
          goods:{
            type:Object,
            default(){
              return {}
            }
          }
        },
        data() {
            return {}
        },
        components: {}
    }
</script>

<style scoped>
  .detailshopinfotitle{
    font-size: 19px;
    margin-top: 10px;
    padding: 5px;
  }
  .detailshopinfoprice{
    display: flex;
    margin-top: 8px;
    margin-left: 8px;
  }
  .price1{
    color: rgb(249,56,56);
    font-size: 30px;

  }
  .price2{
    padding-left: 5px;
    color: rgb(157,157,157);
    text-decoration-line: line-through;
    padding-top: 14px;
  }
  .price3{
    margin-left: 5px;
    line-height: 30px;
    /*width: 65px;*/
    height: 30px;
    background-color: tomato;
    border-radius: 12px;
    color: white;
    font-size: 18px;
    text-align: center;
  }

  .detailshopinfodetail{
    display: flex;
    justify-content: space-between;
    padding: 16px 14px 10px 14px;
    color: rgb(157,157,157);
    font-size: 17px;
    border-bottom: solid rgb(243,233,233) 2px;
  }

  .detailshopinfoexpress{
    display: flex;
    font-size: 15px;
    justify-content: space-between;
    padding: 20px 7px;
    border-bottom: solid 6px rgb(243,233,233) ;
  }
  .detailshopinfoexpressimg{
    margin-top: 2px;
    width: 17px;
    height: 17px;
    vertical-align: -2px;
  }
  .detailshopinfoexpresstext{

  }
</style>
