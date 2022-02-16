<template>
  <div>
    <router-view></router-view>
    <van-tabbar route placeholder>
      <van-tabbar-item replace to="/index" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="user-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style lang="less" scoped></style>
