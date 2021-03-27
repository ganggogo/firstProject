<template>
    <div class="goods">
      <good-list-item :goods-item="item" v-for="(item,index) in goods" :key="item.iid"></good-list-item>
    </div>
</template>

<script>
    import GoodListItem from "./GoodListItem";
    export default {
      name: "GoodList",
      components: {
          GoodListItem
      },
      props:{
          goods:{
            type:Array,
            default(){
              return []
            }
          }
        },
        data() {
            return {}
        },
    }
</script>

<style scoped>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 5px;
  }
</style>
