<template>
    <div class="celan">
      <ul>
        <li v-for=
              "(celanitem,index) in celandata"
            :key="index"
            @click="celanitemclick(index)"
            :class="{celanitemactive:index === currentcelanitem}"
            class="celanitem"
        >
          <router-link :to="celanitem.path">{{celanitem.name}}</router-link>
        </li>
      </ul>
    </div>
</template>
<script>
    export default {
        name: 'celan',
        data()
        {
          return {
            currentcelanitem:0,
            itemindex:0
          }
        },
        props:{
            celandata:{
              type:Array,
              default(){
                return ''
              }
            }
        },
        methods:{
          celanitemclick(index){
            this.currentcelanitem = index
          }
        },
      deactivated() {
          this.itemindex = this.currentcelanitem
      },
      activated() {
          this.currentcelanitem = this.itemindex
      }
    }
</script>

<style scoped>
  ul li{
    list-style: none;
    padding: 12px 16px;
  }
  .celan{

    width: 100%;
    height: 100%;
    background-color: rgb(247,247,247);
    text-align: center;
    color: rgb(65,65,65);
    font-size: 15px;
  }
  .celanitemactive{
    background-color: white;
    border-left: 2px solid #FF4466;
  }
  a{
    text-decoration: none;
    color: rgb(65,65,65);
  }
</style>
