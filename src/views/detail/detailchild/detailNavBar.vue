<template>
    <div>
      <nav-bar>
        <div slot="left" @click="detailnavbarback">
          <img src="~assets/imgs/common/back.svg" alt="" class="detailnavbarimg">
        </div>
        <div slot="center" class= "detailnav">
          <div
            v-for="(item,index) in title"
            class="detailnavitem"
            @click = "detailnavbaritem(index)"
            :class="{active:currentIndex === index}"
          >
            {{item}}
          </div>
        </div>
      </nav-bar>
    </div>
</template>

<script>

    import NavBar from "components/common/navbar/NavBar";
    export default {
        name: "DetailNavBar",
      components: {NavBar},
      data() {
            return {
              title:['商品','参数','评论','推荐'],
              currentIndex:0
            }
        },
        methods:{
          detailnavbaritem(index){
            this.currentIndex = index
            this.$emit('detailnavbaritem',index)
          },
          detailnavbarback(){
            this.$router.go(-1)
          }
        }
    }
</script>

<style scoped>
  .detailnav{
    display: flex;
    font-size: 15px;
  }
  .detailnavitem{
    flex: 1;
  }
  .active{
    color: hotpink;
  }
  .detailnavbarimg{
    margin-top: 12px;
  }
</style>
