import request from './index'

export const  getArticleList = () => {
   return request.get('/api/article')
}
export const  collectArticle = (articleId) => {
   return request.post(`/api/article/${articleId}/like`)
}