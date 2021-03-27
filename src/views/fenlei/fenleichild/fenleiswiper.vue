<template>
  <swiper class="detailswiper">
    <swiper-item v-for="(item,index) in swiperimgs" :key="index">
      <img :src='item' alt="">
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from "components/common/swiper"

    export default {
        name: "fenleiswiper",
        props:{
          swiperimgs:{
            type:Object,
            default(){
              return {}
            }
          }
        },
        components: {
          Swiper,
          SwiperItem
        },
        created() {
        }
    }
</script>

<style scoped>
    .detailswiper{
      height: 100px;
      width: 95%;
      border-radius: 10px;
      margin-left: 2.5%;
      margin-top:2.5%;
    }
  .detailswiper img{
    height: 100px;
    width: 100%;
  }
</style>
