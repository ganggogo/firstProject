<template>
    <div class="tab-control">
      <div v-for = "(item,index) in titles"
           class="tab-control-item" :class="{active:index===currentIndex}" @click="itemClick(index)">
        <span>{{item}}</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "TabControl",
        props:{
          titles:{
            type:Array,
            default(){
              return []
            }
          }
        },
        data() {
            return {
              currentIndex:0
            }
        },
        component: {},
        methods:{
          itemClick(index){
            this.currentIndex = index
            this.$emit('tabIndex',index)
          }
        }
    }
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    font-size: 18px;
    height: 40px;
    line-height: 40px;
  }
  .tab-control-item{
    flex: 1;
  }
  .tab-control-item span{
    padding: 5px;
  }
  .active{
    color: hotpink;
  }
  .active span{
    border-bottom: hotpink 3px solid;
  }
</style>
