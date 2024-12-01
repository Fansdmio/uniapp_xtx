export type PageResult<T> = {
  items: T[]
  //总条数
  counts: number
  page: number
  pages: number
  pageSize: number
}
