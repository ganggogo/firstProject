import {request} from "./request";

export function getDetail(iid) {
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

export function getRecommend() {
  return request({
    url:'/recommend'
  })
}

//商品信息
export class Goods{
  constructor(itemInfo,columns,services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realprice = itemInfo.lowNowPrice
  }
}
//店铺信息
export class Shop{
  constructor(shopInfo) {
    this.log = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
  }
}
//商品参数
export class GoodsParams {
  constructor(info,rule) {
    this.image = info.image ? info.image[0] : ""
    this.infos = info.set
    this.sizes = rule.tables
  }
}
