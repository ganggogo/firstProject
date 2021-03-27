import Toast from './Toast'
const obj = {}

obj.install = function (Vue) {  //调用install方法会接受一个传来的Vue参数
  // console.log("install函数被执行...")

  /*
  //方法1、
  console.log(Toast.$el)
  //报错，说明Toast.$el不是一个node，说明在执行install时，.$el还没有挂载
  document.body.appendChild(Toast.$el)
  Vue.prototype.$toast = Toast
   */
  //方法2
  //1.创建组件构造器
  const toastConstructor = Vue.extend(Toast)
  //2.用new的方式，根据组件构造器，可以创建出一个组件对象
  const toast = new toastConstructor()
  //3.将组件对象手动的挂载到某一个元素上面
  toast.$mount(document.createElement('div'))   //将toast挂载到新创建的div元素上

  //4.toast.$el对应的就是div
  document.body.appendChild(toast.$el)

   Vue.prototype.$toast = toast

}





export default obj
