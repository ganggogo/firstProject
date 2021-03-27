<template>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
        name: "scroll",
        props:{
          probeType: {
            type:Number,
            default(){
              return 0
            }
          },
          pullUpLoad: {
            type:Boolean,
            default() {
              return false;
            }
          }
        },
        data() {
            return {
              scroll:null
            }
        },
        component: {},
        mounted() {
          //1.创建scroll对象
          this.scroll = new BScroll(this.$refs.wrapper,{
            probeType:this.probeType,
            pullUpLoad:this.pullUpLoad,
            click:true
          })
          //2.监听scroll滚动的位置
          //做一个判断，更严谨
          if ( this.probeType === 2 || this.probeType === 3  ){
            this.scroll.on('scroll',(position)=>{
              //并不是所有的都要打印这个position的，所以把它传出去，给需要的人取
              // console.log(position)
              this.$emit('scroll',position)
            })
          }
          //3.监听上拉事件
          //做一个判断，更严谨
          if ( this.pullUpLoad ){
            this.scroll.on('pullingUp',()=>{
              this.$emit('pullingUp')
            })
          }
        },

        //在scroll内部封装一个scrollTo方法
        methods:{
          //1.回到顶部
          scrollTo(x,y,time=1000){
            this.scroll && this.scroll.scrollTo(x,y,time)   //同理
          },
          //2.多次上拉请求数据
          finishPullUp(){
            this.scroll.finishPullUp()
          },
          //3.刷新页面，重新获取scrollHeight
          refresh(){
            // console.log("图片初始化完成...")
            this.scroll && this.scroll.refresh()
            //这样写是怕，首页里面挂载了goodlist组件，goodlist里面挂载了goodlistitem组件，goodlistitem组件请求图片加载，有可能
            //加载速度很快，图片一下就出来了，图片出来了马上又调用scroll里面的refresh方法，但是scroll是在mouted里面创建出来的，但
            //是请求图片数据是在created里面写的，有可能图片请求到了，但是此时还未挂载，此时的scroll实例还没生成，所以refresh函数
            //显示未定义
          }
        }
    }
</script>

<style scoped>

</style>
