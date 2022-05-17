<template>
  <div id='ArticleList'  class='ArticleList'  
    v-loading.fullscreen.lock="loading"
    element-loading-text="拼命掘金中"
    element-loading-background="rgba(0, 0, 0, 0.5)">
    <ArticleItem v-for="article in articleList" :articleMsg="article" :key="article.id"/>
  </div>
</template>

<script>
import {getArticleList} from '@/api/article'
export default {
  name: 'ArticleList',
  props: {
  },
  data () {
    return {
      loading:false,
      articleList:[]
    }
  },
  created () { 

  },
  computed: { 

  },
  components: { 
    ArticleItem:()=> import('./ArticleItem.vue')
  },
  methods: {
    async getArticleList(){
      this.loading = true
      const result = await getArticleList()
      if(result.success){
        this.articleList = result.articleList
      }
      this.loading = false
      console.log('result: ', result);
    }
  },
  mounted () { 
    this.getArticleList()
  },
  watch: { 

  }
}
</script>
<style scoped lang='scss'>
 .ArticleList{
   background-color: #fff;
   width: 100%;
 }
</style>