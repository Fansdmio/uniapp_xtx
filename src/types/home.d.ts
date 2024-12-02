export type BannerItem = {
  // 跳转类型
  hrefUrl: string
  id: string
  // 图片链接
  imgUrl: string
  //跳转类型
  type: number
}

export type CategoryItem = {
  //图标路径
  icon: string
  id: string
  //分类名称
  name: string
}

export type HotItem = {
  alt: string
  id: string
  pictures: string[]
  target: string
  title: string
  type: number
}

export type GuessItem = {
  //商品描述
  desc: string
  //商品折扣
  discount: string
  id: string
  name: string
  //商品已下单数量
  orderNum: number
  //商品图片
  picture: string
  //商品价格
  price: number
}

export type PageParams = {
  page?: number
  pageSize?: number
}
