<template>
    <div class="chaoliuguan">
      <scroll class="contentmain" ref="scroll">
        <img src="~assets/imgs/fenlei/chaoliuguan.png" alt="" @load="imgload">
      </scroll>
    </div>
</template>

<script>
    import Scroll from "../../../components/common/scroll/scroll";
    export default {
        name: "chaoliuguan",
        data() {
            return {}
        },
        components: {Scroll},
        methods:{
          imgload(){
            this.$refs.scroll.refresh()
          }
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
    border-radius: 16px;
    margin-top: 5px;
    padding-top: 5px;
    color: black;
  }
</style>
