<template>
    <div class="cartgooditem">
      <check-duigou class="duigou" :is-checked="goods.isChecked" @click.native="duigouclick"></check-duigou>
      <div class="left-img">
        <img :src="goods.image" alt="">
      </div>
      <div class="right">
        <p class="right-top">{{goods.title}}</p>
        <p class="right-middle">{{goods.desc}}</p>
        <div class="right-bottom">
          <span class="price">￥{{goods.price}}</span>
          <span class="spancount" v-if="showbox" @click="spancountclick">×{{goods.count}}</span>
          <div v-else class="divcout ">
            <span @click="decclick" class="decfunspan"><b>-</b></span>
            <span class="numspan">{{goods.count}}</span>
            <span @click="incclick" class="incfunspan"><b>+</b></span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import CheckDuigou from "components/common/checkedduigou/CheckDuigou";
    export default {
        name: "GoodList",
        data() {
            return {
              // isChecked:this.$store.state.cartList.isChecked
              showbox:true
            }
        },
        props:{
          goods:{
            type:Object,
            default(){
              return{}
            }
          }
        },
        created() {
        },
        components: {
          CheckDuigou

        },
        methods:{
          duigouclick(){
            this.goods.isChecked = !this.goods.isChecked
          },
          spancountclick(){
            this.showbox = !this.showbox
          },
          decclick(){
            if ( this.goods.count > 1 ){
              this.goods.count--
            }
          },
          incclick(){
            this.goods.count++
          }
        }
    }
</script>

<style scoped>
  .cartgooditem{
    display: flex;
    width: 100%;
    height: 157px;
    padding: 6px;
    padding-bottom: 5px;
    border-bottom: solid 2px rgb(243,233,233);
  }
  .left-img{
    padding: 5px;
    margin-right: 14px;
  }
  .left-img img{
    width: 90px;
    height: 130px;
    border-radius: 10px;
  }
  .right{
    width: calc(100% - 144px);
    margin-right: 5px;
  }
  .right p{
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    letter-spacing:3px
  }
  .right-top{
    font-size: 21px;
    margin-bottom: 22px;
  }
  .right-middle{
    font-size: 15px;
    color: rgb(65,64,64);
  }
  .price{
    font-size: 20px;
    color: rgb(253,101,29);
    display: inline-block;
    width: 84px;
  }
  .right-bottom{
    margin-top: 30px;
    display: flex;
  }
  .spancount{
    margin-left: 62px;
    font-size: 12px;
    border: 0.5px solid rgb(181,180,180);
    padding: 4px 10px;
    border-radius: 20%;
  }
  .duigou{
    margin-top: 58px;
  }
  .divcout{
    margin-top: 0px;
    margin-left: 18px;
    border: 0.5px solid rgb(181,180,180);
    font-size: 12px;
    border-radius: 6px;
  }
  .decfunspan{
    padding: 4px 8px;
    border-right: 0.5px solid rgb(181,180,180);
  }
  .incfunspan{
    padding: 4px 8px;
    border-left: 0.5px solid rgb(181,180,180);
  }
  .numspan{
    padding: 3px 0px;
    text-align: center;
    display: inline-block;
    width: 75px;
  }

</style>
