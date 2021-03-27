<template>
    <div v-if="Object.keys(detailinfo).length !==0">
      <div class="top-top">-----------------------------</div>
      <div class="top-middle">
        {{detailinfo.desc}}
      </div>
      <div class="top-bottom">-----------------------------</div>
      <div class="key">{{detailinfo.detailImage[0].key}}</div>
      <div class="img-container">
        <img class="img" v-for="(item,index) in detailinfo.detailImage[0].list" :src="item" alt="" @load="imgLoad">
      </div>
    </div>
</template>

<script>
    export default {
        name: "detailGoodsInfo",
        data() {
            return {
              count:0,
              imgLength:0
            }
        },
        props:{
          detailinfo:{
            type:Object,
            default(){
              return {}
            }
          }
        },
        components: {},
        methods:{
          imgLoad(){
            //由于页面需要请求图片，每一张图片的高度都会影响到页面的高度，
            // 所以在图片加载完需要调用一下scroll里面的refresh函数刷新页面重新获取高度
            //但是如果每张图片加载完都去调用一次函数，显然很影响性能
            //所以直接在所有图片全部加载完了再调用一次refresh函数就很解决性能
            this.count++
            if ( this.count === this.imgLength){
              this.$emit('imgLoad')
            }
          }
        },
        //要获取图片的总数量，如果写在imgLoad里面，每次都要运行一大串，浪费性能，把它放在watch里面，只要请求一次，每次发生变化就会自动更新
        watch:{
          detailinfo(){
            this.imgLength = this.detailinfo.detailImage[0].list.length
          }
        }
    }
</script>

<style scoped>
  .top-top,.top-bottom{
    text-align: center;
  }
  .top-middle{
    padding: 8px;
    font-size: 18px;
  }
  .top-bottom{
    margin-bottom: 10px;
  }
  .key{
    margin-bottom: 10px;
  }
  .img{
    width: 100%;
    margin: 1px 0px;
  }
  .img-container{
    padding-bottom: 20px;
    border-bottom: solid 6px rgb(243,233,233) ;
  }
</style>
