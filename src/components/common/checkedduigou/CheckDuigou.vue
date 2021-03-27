<template>
    <div  class="checkduigou">
      <div v-if='isChecked' class="imgdiv"><img src="~assets/imgs/cart/mianxingduigou.svg" alt=""></div>
      <div v-else  class="imgdiv"><img src="~assets/imgs/cart/nomianxingduigou.svg" alt=""></div>
    </div>
</template>

<script>
    export default {
        name: "CheckDuigou",
        data() {
            return {

            }
        },
        props:{
          isChecked:{
            type:Boolean,
            default(){
              return false
            }
          }
        },
        components: {

        },
      methods:{

      }
    }
</script>

<style scoped>
  .checkduigou img{
    width: 24px;
    height: 24px  ;
    /*margin-top: 58px;*/
    color: white;
  }
  .imgdiv{
    height: 24px;
    width: 24px;
  }
</style>
