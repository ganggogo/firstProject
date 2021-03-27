<template>
    <div class="cartbottombar">
      <div class="left">
        <div class="quanxuan" @click="allselect">
          <check-duigou class="duigou" :is-checked="allChecked" ></check-duigou>
          <div class="quanxuan-text">全选</div>
        </div>
        <div class="countprice">合计：￥{{totalprice}}</div>

      </div>
      <div class="right" @click="calcclick">
        去结算({{ischeckedcount}})
      </div>
    </div>
</template>

<script>
    import CheckDuigou from "components/common/checkedduigou/CheckDuigou";
    import {mapGetters} from 'vuex'
    export default {
        name: "CartBottomBar",
        data() {
            return {

              //这里不能写data了，不然报错
              // allChecked() {
              //   return false;
              // }
            }
        },
        components: {
          CheckDuigou
        },
        created() {
        },
        computed:{
          ...mapGetters(['cartlistLength','cartList']),
          totalprice(){
            return this.$store.state.cartList.filter(item =>{
              return item.isChecked === true
            }).reduce((preValue,item)=>{
              return preValue + item.price * item.count
            },0).toFixed(2)
          },

          //计算出购物车里面有多少商品被选中
          ischeckedcount(){
            return this.$store.state.cartList.filter(item=>{
              return item.isChecked
            }).length
          },
          allChecked(){

            //必须先判断，如果购物车没有商品被选中，name全选按钮的被选状态应该是false
            if ( !this.$store.state.cartList.length ) return false

            //1.filter方法
            /*return !(this.$store.state.cartList.filter(item=>{
              return !item.isChecked
            }).length)*/

            //2.find方法(性能更高)
            // return !this.$store.state.cartList.find(item => !item.isChecked)

            //3.遍历
            for ( let item of this.$store.state.cartList ){
              if ( !item.isChecked ){
                return false
              }
            }
            return true
          }
        },
        methods:{
            //全选按钮点击效果
            allselect(){
                if ( this.allChecked ){ //若已经是全部选中，则点击效果是让他全部不选中
                  this.$store.state.cartList.forEach(item=>item.isChecked = false)
                }
                else {//若已经是全部没有选中或者是部分选中，则点击效果是让他全部选中
                  this.$store.state.cartList.forEach(item=>item.isChecked = true)
                }
            },

            //引入toast
            calcclick(){
              if ( this.ischeckedcount === 0 ){
                this.$toast.show('请先选择商品！',2000)
              }
            }
        }
    }
</script>

<style scoped>
  .cartbottombar{
    width: 100%;
    height: 40px;
    background-color: rgb(241,236,234);
    display: flex;
  }
  .quanxuan{
    display: flex;
    width: 70px;
    display: flex;
    color: rgb(97,97,97);
  }
  .left{
    /*background-color: blue;*/
    width: 70%;
    display: flex;
    justify-content: space-between;
    /*justify-content:center;*/
    align-items:center;
  }
  .right{
    flex: 1;
    display: flex;
    align-items:center;
    background-color: rgb(255,81,0);
    display: block;
    text-align: center;
    line-height: 40px;
    color: white;
  }
  .quanxuan-text{
    margin-left: 5px;
    margin-top: 1px;
  }
  .countprice{
    margin-left: 15px;
    font-size: 18px;
    margin-right: 5px;
  }
</style>
