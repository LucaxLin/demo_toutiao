import $article from '@/utils/rquest.js'

export const getArticleListAPI = function (_page, _limit) {
  return $article.get('/articles', {
    params: {
      _page,
      _limit
    }
  })
}
