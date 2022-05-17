import request from './index'

export let  getArticleList = () => {
   return request.get('/api/article')
}