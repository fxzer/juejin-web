import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    curArticle:{},
    user:{},
    setToken:''
  },
  mutations: {
    setCurArticle(state,article={}){
      state.curArticle = article
      localStorage.setItem('curArticle',JSON.stringify(article))
    },
    setUserInfo(state,user={}){
      console.log('user: ', user);
      state.user = user
      localStorage.setItem('user',JSON.stringify(user))
    },
    setToken(state,token=''){
      state.token = token
      localStorage.setItem('token', token )
    },
  },
  actions: {
  },
  modules: {
  }
})
