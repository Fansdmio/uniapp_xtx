import type { GoodsItem } from './global'

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

/**
 * 商品猜你喜欢项
 */
export type GuessItem = GoodsItem

/**
 * 分页参数
 */
export type PageParams = {
  /** 当前页码 */
  page: number
  /** 每页显示的条数 */
  pageSize: number
}
