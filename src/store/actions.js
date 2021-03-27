
import {ADD_COUNTER,ADD_GOOD} from "./mutation-type";

export default {
  //context -> (state,commit,rootstate)
  addcart1(context,playload){
    return new Promise((resolve,reject)=>{
      let oldGood = null
      for ( let item of context.state.cartList ){
        if ( item.iid === playload.iid ){
          oldGood = item
        }
      }
      //如果oldGood不为空
      if ( oldGood !== null ){   //当前商品数量加一
        context.commit(ADD_COUNTER,oldGood)
        resolve('当前商品数量+1')
      }
      //如果oldGood为空
      else{
        playload.count = 1
        context.commit(ADD_GOOD,playload)
        resolve('成功添加到购物车！')
      }
    })
  }
}
