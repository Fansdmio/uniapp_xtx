<script setup lang="ts">
//
import CustomNavbar from './components/CustomNavbar.vue'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import CategoryPanel from '@/pages/index/components/CategoryPanel.vue'
import HotPanel from '@/pages/index/components/HotPanel.vue'
import type { XtxGuessInstance } from '@/types/component'

//定义轮播图数据
const bannerList = ref<BannerItem[]>([])
//获取轮播图数据
const getBannerData = async () => {
  //请求轮播图数据
  const res = await getHomeBannerAPI()
  //设置轮播图数据
  bannerList.value = res.result
}

//定义分类数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  //请求分类数据
  const res = await getHomeCategoryAPI()
  //设置分类数据
  categoryList.value = res.result
}

//定义热门数据
const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}

onLoad(() => {
  getBannerData()
  getHomeCategoryData()
  getHomeHotData()
})

//定义猜你喜欢组件实例  使guessRef的类型为XtxGuess组件实例
const guessRef = ref<XtxGuessInstance>()
//滚动到底部时触发加载更多
const onScrolltolower = () => {
  //调用getMore(getHomeGoodGuessLikeData)方法
  guessRef.value?.getMore()
  // console.log('触发加载更多')
}

//定义下拉刷新状态
const isTriggered = ref(false)
//下拉刷行时触发
const onRefresherrefresh = async () => {
  isTriggered.value = true
  // await getBannerData()
  // await getHomeCategoryData()
  // await getHomeHotData()
  await Promise.all([getBannerData(), getHomeCategoryData(), getHomeHotData()])
  isTriggered.value = false
}
</script>

<template>
  <CustomNavbar />
  <scroll-view
    refresher-enabled="true"
    @refresherrefresh="onRefresherrefresh"
    :refresher-triggered="isTriggered"
    @scrolltolower="onScrolltolower"
    class="scroll-view"
    scroll-y
  >
    <XtxSwiper :list="bannerList" />
    <CategoryPanel :list="categoryList" />
    <HotPanel :list="hotList" />
    <!-- 绑定XtxGuess组件到guessRef里 -->
    <XtxGuess ref="guessRef" />
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7ff;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view {
  flex: 1;
}
</style>
