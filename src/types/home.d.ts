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
