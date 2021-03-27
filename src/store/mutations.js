
import {ADD_COUNTER,ADD_GOOD} from "./mutation-type";

export default {
  [ADD_COUNTER](state,playload){
    playload.count = playload.count + 1
  },
  [ADD_GOOD](state,playload){
    playload.isChecked = true
    state.cartList.push(playload)


    localStorage.setItem('cart',JSON.stringify(state.cartList))//在更新cartList之后，把cart数组保存到本地的localStorage中（大约5M的储存空间，为了解决浏览器session小的问题）
  }
}
