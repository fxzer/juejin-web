import request from './index'

export const  getArticleList = (conditions) => {
   return request.post('/juejinapi/article/list',{conditions})
}
export const  collectArticle = (articleId) => {
   return request.post(`/juejinapi/article/${articleId}/like`)
}