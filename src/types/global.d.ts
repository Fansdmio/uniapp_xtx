/**
 * 通用分页结果类型
 */
export type PageResult<T> = {
  items: T[]
  //总条数
  counts: number
  page: number
  pages: number
  pageSize: number
}

/**
 * 通用商品类型
 */
export type GoodsItem = {
  /** 商品描述 */
  desc: string
  /** 商品折扣 */
  discount: string
  /** 商品ID */
  id: string
  /** 商品名称 */
  name: string
  /** 商品已下单数量 */
  orderNum: number
  /** 商品图片 */
  picture: string
  /** 商品价格 */
  price: number
}
