import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import toast from 'components/common/toast'

import fastclick from 'fastclick'

import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

//添加事件总线对象
Vue.prototype.$bus = new Vue()

//安装toast插件
Vue.use(toast)  //当调用Vue.use(toast)，自动就调用了toast插件里面的install方法

//解决移动端300毫秒延迟问题
fastclick.attach(document.body)

//安装图片懒加载插件
Vue.use(VueLazyLoad,{
  loading:require('assets/imgs/home/placeholder.png')
})
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})


//虽然这里可以引用css文件，但是一般不在这用
// require("./assets/css/base.css")

// const arr = [12,31,42]
// const a = arr.find(item=>item > 1)
// console.log(!a)
// if (-1){
//   console.log(1111)
// }
// console.log('http://localhost:8080/detail/1jw0sr2'.includes('/detail'))
