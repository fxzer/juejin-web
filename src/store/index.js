import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    curArticle:{},
    user:{},
  },
  mutations: {
    setCurArticle(state,article={}){
      state.curArticle = article
      localStorage.setItem('curArticle',JSON.stringify(article))
    },
    setUserInfo(state,user={}){
      state.user = user
      localStorage.setItem('user',JSON.stringify(user))
    },
  },
  actions: {
  },
  modules: {
  }
})
