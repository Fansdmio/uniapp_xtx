<script setup lang="ts">
//
import CustomNavbar from './components/CustomNavbar.vue'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import CategoryPanel from '@/pages/index/components/CategoryPanel.vue'
import HotPanel from '@/pages/index/components/HotPanel.vue'

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
</script>

<template>
  <CustomNavbar />
  <XtxSwiper :list="bannerList" />
  <CategoryPanel :list="categoryList" />
  <HotPanel :list="hotList" />
</template>

<style lang="scss">
page {
  background-color: #f7f7ff;
}
</style>
