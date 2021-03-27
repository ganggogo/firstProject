<template>
      <swiper class="detailswiper">
        <swiper-item v-for="item in swiperimg">
          <img :src='item' alt="">
        </swiper-item>
      </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from "components/common/swiper"
    export default {
        name: "DetailSwiper",
        props:{
          swiperimg:{
            type:Array,
            default(){
              return []
            }
          }
        },
        data() {
            return {}
        },
        components: {
          Swiper,
          SwiperItem
        }
    }
</script>

<style scoped>
  .detailswiper{
    height: 300px;
    overflow: hidden;
  }
</style>
