import Vue from 'vue'
import VueRouter from 'vue-router'
import ArticleList from '../views/ArticleList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ArticleList',
    component: ArticleList
  },
  {
    path: '/articleDetail',
    name: 'ArticleDetail',
    component: ()=>import('@/views/ArticleDetail')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
