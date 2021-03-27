<template>
    <div class="tab-bar-item" @click=itemClick>

        <!--在外面包一层div的作用是防止App里面的slot直接替换TabBarItem里面的slot而样式也被替换了-->
        <div v-if="active=!isActive">
          <slot name="img"></slot>
        </div>
        <div v-else>
          <slot name="img-active"></slot>
        </div>
        <div :style="activestyle">
          <slot name="text"></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    props:{
        path:String,
        activecolor:{
            type:String,
            default:"red"
        }
    },
    data(){
        return {
            // isActive:false
        }
    },
    computed: {
        isActive(){
            // /home -> item1(/home) = true
            // /fenlei -> item2(/fenlei) = false
            // /gouwuche -> item3(/gouwuche) = false
            // /wode -> item4(/wode) = false
            return this.$route.path.indexOf(this.path) !==-1
        },
        activestyle(){
            return this.isActive?{color:this.activecolor}:{}
        }
    },
    methods: {
        itemClick(){
            this.$router.replace(this.path)
        }
    },
  }
</script>

<style scoped>
    .tab-bar-item{
        flex: 1;
        text-align:center;
        height: 49px;
        color:white;
    }
    .tab-bar-item img{
      width:24px;
      height:24px;
      vertical-align:middle
  }
    /* .active{
    color:#d81e06
  } */
</style>
