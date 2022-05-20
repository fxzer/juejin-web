import request from './index'

export const  getArticleList = (conditions) => {
   return request.post('/api/article/list',{conditions})
}
export const  collectArticle = (articleId) => {
   return request.post(`/api/article/${articleId}/like`)
}