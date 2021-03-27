<template>
    <div v-if="Object.keys(goodsparams).length !== 0" class="paramsdiv">
      <table v-for="(table,index) in goodsparams.sizes" class="table">
        <tr v-for="(tr,indey) in table" class="tr1">
          <td v-for="(td,indez) in tr">
            {{td}}
          </td>
        </tr>
      </table>
      <table class="table">
        <tr v-for="(info,index) in goodsparams.infos" class="tr2">
          <td class="td1">{{info.key}}</td>
          <td class="td2">{{info.value}}</td>
        </tr>
      </table>
    </div>
</template>

<script>
    export default {
        name: "detailParamsInfo",
        data() {
            return {}
        },
        components: {},
        props:{
          goodsparams:{
            type:Object,
            default(){
              return {}
            }
          }
        },
    }
</script>
<style scoped>
  .table{
    padding: 5px;
    width: 100%;
  }
  .table td{
    border-bottom: 1px solid rgb(205,198,198);
    height: 30px;
  }
  .td1{
    width: 35%;
  }
  .td2{
    padding: 5px 0;

    color: deeppink;
  }
  .tr1{
    width: 100%;
  }
  .tr1 td{
    width: 25%;
  }
  .paramsdiv{
    padding: 8px;
    border-bottom: solid 6px rgb(243,233,233);
  }
</style>
