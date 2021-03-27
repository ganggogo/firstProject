<template>
    <div>
      <swiper>
        <SwiperItem v-for = "(item,index) in banners" :key = "index">
          <a :href="item.link"></a>
          <img :src="item.image" @load="imgLoad">
        </SwiperItem>
      </swiper>
    </div>
</template>

<script>
  import {Swiper,SwiperItem} from "components/common/swiper"
    export default {
        name: "HomeSwiper",
        props:{
          banners:{
            type:Array,
            default(){
              return []
            }
          }
        },
        data(){
          return{
            isLoad:false
          }
        },
        components: {
          SwiperItem,
          Swiper
        },
      methods:{
        imgLoad(){
          //其实这个事件发出去一次就够了，不需要每次加载完一次图片就发出事件
          if ( !this.isLoad){
            this.$emit('swiperImgLoad')
            this.isLoad = true
          }

        }
      }
    }
</script>

<style scoped>

</style>
