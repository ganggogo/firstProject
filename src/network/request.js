import axios from "axios"

export function request(config) {
  //1.创建axios实例
  const instance = axios.create({
    baseURL:'http://152.136.185.210:8000/api/w6',
    timeout:9000,
    header:{}
  })
  //2.axios拦截器的使用
  //2.1请求拦截
  instance.interceptors.request.use(config=>{
    // console.log(config)
    //拦截器的作用
    //1.比如config中的一些信息不符合服务器的要求
    //2.比如每次发送网络请求都希望在界面中显示一个请求的图标
    //3.某些网络请求（比如登录（token）），必须携带一写特殊信息，在发送网络请求时，会先检查你是否携带了token信息，没有的话就会跳转到页面重新登录，携带了token之后才会继续进行相应的网络请求
    //拦截了还得返回，
    return config
  },err=>{
    console.log(err)
  })

  //2.响应拦截
  instance.interceptors.response.use(res=>{
    // console.log(res)
    return res.data      //res里面只有data是服务器返回的数据
  },err=>{
    console.log(err)
  })
  //3.发送真正的网络请求
  return instance(config)
}



