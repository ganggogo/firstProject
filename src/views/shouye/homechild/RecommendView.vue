<template>
    <div class="recommend">
      <div v-for = "item in recommends" class="recommend-item">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </div>
    </div>
</template>

<script>
    //import from ''
    export default {
        name: "RecommendView",
        props:{
            recommends:{
              type:Array,
              default(){
                return []
              }
            }
        },
        data() {
            return {}
        },
        component: {}
    }
</script>

<style scoped>
  .recommend{
    display: flex;
    text-align: center;
    font-size: 16px;
    padding: 10px 0 20px;
    border-bottom: #eee solid 10px;
  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 3px;

  }
</style>
