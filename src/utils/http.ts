import { useMemberStore } from '@/stores'

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

//设置拦截器
const httpInterceptor = {
  invoke(options: UniApp.RequestOptions) {
    //如果请求地址不是http开头
    if (!options.url.startsWith('http')) {
      //拼接完整地址
      options.url = baseURL + options.url
    }
    //设置超时时间为10000ms
    options.timeout = 10000

    //设置请求头
    options.header = {
      ...options.header,
      //小程序标识
      'source-client': 'miniapp',
    }
    //获取持久化
    const memberStore = useMemberStore()
    //获取用户 token
    const token = memberStore.profile?.token
    //如果有token
    if (token) {
      //设置请求头的Authorization字段
      options.header.Authorization = token
    }
    // console.log(options)
  },
}

//设置返回数据类型
interface Data<T> {
  code: string
  msg: string
  result: T
}

// 拦截 request 请求
uni.addInterceptor('request', httpInterceptor)
// 拦截 uploadFile 文件上传
uni.addInterceptor('uploadFile', httpInterceptor)

//添加类型,支持泛型      //设置options参数类型
export const http = <T>(options: UniApp.RequestOptions) => {
  // 返回一个 Promise 对象
  return new Promise<Data<T>>((resolve, reject) => {
    //发起请求
    uni.request({
      ...options,
      //响应成功
      success(res) {
        //判断状态码是否在 200-300 之间
        if (res.statusCode >= 200 && res.statusCode < 300) {
          //提取响应数据
          resolve(res.data as Data<T>)
        } else if (res.statusCode === 401) {
          // 401 代表未登录
          const memberStore = useMemberStore()
          // 清除用户信息
          memberStore.clearProfile()
          // 跳转到登录页
          uni.navigateTo({ url: '/pages/login/login' })
          // 返回一个失败的 Promise
          reject(res)
        } else {
          //其他错误
          uni.showToast({
            icon: 'none',
            title: (res.data as Data<T>).msg || '请求失败',
          })
          reject(res)
        }
      },
      fail(err) {
        uni.showToast({
          icon: 'none',
          title: '网络错误',
        })
        reject(err)
      },
    })
  })
}
