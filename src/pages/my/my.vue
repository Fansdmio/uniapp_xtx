<script setup lang="ts">
import { useMemberStore } from '@/stores'
const memberStore = useMemberStore()
import { http } from '@/utils/http'

const getData = async () => {
  const res = await http<String[]>({
    method: 'GET',
    url: '/home/banner',
  })
  console.log('请求成功', res)
}
</script>

<template>
  <view class="my">
    <view>会员信息：{{ memberStore.profile }}</view>
    <button
      @tap="
        memberStore.setProfile({
          nickname: 'alice',
          token: '1234',
        })
      "
      size="mini"
      plain
      type="primary"
    >
      保存用户信息
    </button>
    <button @tap="memberStore.clearProfile()" size="mini" plain type="warn">清理用户信息</button>
    <button @tap="getData()">测试</button>
  </view>
</template>

<style lang="scss">
//
</style>
