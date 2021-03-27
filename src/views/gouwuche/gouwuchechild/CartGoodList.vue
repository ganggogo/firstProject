<template>
    <div>
      <cart-good-item
        v-for="(item,index) in cartList"
        :goods = item
        :key="index"></cart-good-item>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import CartGoodItem from "./CartGoodItem";
    export default {
        name: "GoodList",
        data() {
            return {

            }
        },
        components: {
          CartGoodItem
        },
        computed:{
          ...mapGetters(['cartlistLength','cartList'])
        }
    }
</script>

<style scoped>

</style>
