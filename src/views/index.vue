<template>
  <div class="home-container">
    <!-- header -->
    <van-nav-bar title="黑马头条" fixed placeholder />
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <ArticleInfo v-for="item in artlist" :key="item.art_id" :title="item.title" :author="item.aut_name" :commons="item.comm_count" :pubdate="item.pubdate" :cover="item.cover"></ArticleInfo>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import ArticleInfo from '@/components/ArticleInfo.vue'
// import $article from '@/utils/rquest.js'
import { getArticleListAPI } from '@/api/aritcleAPI.js'
export default {
  name: 'index',
  data() {
    return {
      page: 1,
      limit: 10,
      artlist: [],
      loading: true,
      finished: false,
      refreshing: false
    }
  },
  components: {
    ArticleInfo
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.artlist = []
          this.page = 0
          this.refreshing = false
        }
        // 异步更新数据
        this.page += 1
        this.get_article()

        // 加载状态结束
        this.loading = false
      }, 500)
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true
      this.onLoad()
    },
    async get_article() {
      const { data: res } = await getArticleListAPI(this.page, this.limit)
      // this.artlist = this.artlist.concat(res)
      this.artlist = [...this.artlist, ...res]
      // 数据全部加载完成
      if (res.length === 0) this.finished = true
    }
  },

  created() {
    this.get_article()
    this.loading = false
  }
}
</script>

<style lang="less" scoped>
/deep/.van-nav-bar {
  background-color: #007bff;
  /deep/.van-nav-bar__title {
    color: white;
  }
}
</style>
