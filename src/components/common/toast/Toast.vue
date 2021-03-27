<template>
    <div v-show="isShow" class="toast">
      {{message}}
    </div>
</template>

<script>
    export default {
        name: "Toast",

        data() {
            return {
              message:"幸福来敲门",
              isShow:false
            }
        },

        //这是没有封装成插件的写法
        /*props:{
          message:{
            type:String,
            default(){
              return ''
            }
          },
          isShow:{
            type:Boolean,
            default(){
              return false
            }
          }
        },*/


        methods:{
          show(message = '默认文字',duration = 1000){
            // duration = duration || 2000
            this.isShow = true
            this.message = message

            setTimeout(()=>{
              this.isShow = false
              this.message = ''
            },duration)
          }
        },
        components: {

        }
    }
</script>

<style scoped>
  .toast{
    position: absolute;
    /*width: 120px;*/
    height: 30px;
    line-height: 30px;
    text-align: center;
    top: 50%;
    left: 50%;
    padding: 8px 16px;
    background-color: rgba(0,0,0,0.4);
    color: white;
    transform: translate(-50%,40%);
    z-index: 999;
  }
</style>
