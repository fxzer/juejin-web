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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
