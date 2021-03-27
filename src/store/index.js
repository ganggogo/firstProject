import Vue from 'vue'
import Vuex from 'vuex'

import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
//安装插件
Vue.use(Vuex)

//每一次进入网站，肯定会调用main.js，在刚刚调用时，先从本地存储中，把购物车的数据取出来，放到store中
const cart = JSON.parse(localStorage.getItem('cart')  || '[]')

const state = {
  cartList:cart,
}

//创建Store对象
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

//导出共享实例
export default store

// export default new Vuex.Store({
//   state: {
//     cartList:[]
//   },
//   // mutations: {
//   //   //mutation唯一目的就是修改state中的状态
//   //   //mutation中的每个方法尽可能完成的事比较单一一点，一个mutation只做一件事，而这里的mutation做了两件事=>给购物车添加商品或者数量加1
//   //   // addcart(state,playload){
//   //   //   let oldGood = null
//   //   //   for ( let item of state.cartList ){
//   //   //     if ( item.iid === playload.iid ){
//   //   //       oldGood = item
//   //   //     }
//   //   //   }
//   //   //   //如果oldGood不为空
//   //   //   if ( oldGood !== null ){
//   //   //     oldGood.count = oldGood.count + 1
//   //   //   }
//   //   //   //如果oldGood为空
//   //   //   else{
//   //   //     playload.count = 1
//   //   //     state.cartList.push(playload)
//   //   //   }
//   //   // }
//   //
//   //
//   //
//   // },
//   // actions: {
//   //
//   // },
//   // modules: {
//   // }
// })
