<template>
    <div class="remaibangdan">
      <scroll class="contentmain" ref="scroll">
        <fenleiswiper :swiperimgs="swiperimgs"></fenleiswiper>
        <div class="rexiaobangdancontent">
          <img src="~assets/imgs/fenlei/rexiaobangdan.png" alt="">
        </div>
      </scroll>
    </div>
</template>

<script>
    import Scroll from "../../../components/common/scroll/scroll";
    import Fenleiswiper from "./fenleiswiper";
    export default {
        name: "remaibangdan",
        data() {
            return {
              swiperimgs: {
                img1:require ('assets/imgs/fenlei/swiperimgs/1.png'),
                img2:require ('assets/imgs/fenlei/swiperimgs/2.png'),
                img3:require ('assets/imgs/fenlei/swiperimgs/3.png'),
                img4:require ('assets/imgs/fenlei/swiperimgs/4.png')
              }
            }
        },
        components: {
          Fenleiswiper,
          Scroll

        },
        activated() {
          this.$refs.scroll.scrollTo(0,scrollY,0)
          this.$refs.scroll.refresh()
        },
        deactivated() {
          scrollY = this.$refs.scroll.scroll.y
          // console.log(scrollY)
        }
    }
</script>

<style scoped>
  .contentmain{
    width: 75%;
    position: absolute;
    left: 25%;
    top: 0;
    bottom: 0;
    overflow: hidden;
    background-color: white;
    /*border-radius: 16px;*/
    margin-top: 5px;
    padding-top: 5px;
  }
  .rexiaobangdancontent{
    margin-top: 5px;
    background-color: white;
  }
</style>
