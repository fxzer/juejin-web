<template>
<div class="main-wrapper ">
  <div class="sort-box">
    <span v-for="(item,index) in sortOptions" :key="index" 
    @click="activeIndex = index" :class="activeIndex == index?'active':''">{{item.label}}</span>
  </div>
  <div id='ArticleList'  class='article-list'  
    v-loading.fullscreen.lock="loading"
    element-loading-text="拼命掘金中..."
    element-loading-background="rgba(0, 0, 0, 0.5)">
    <ArticleItem v-for="article in articleList" :articleMsg="article" :key="article.id"
     @click.native="toDetail(article)"></ArticleItem>
  </div>
  
   <el-backtop target=".article-list" :bottom="100">
        <div class="backtop-box">
          <i class="iconfont icon-back-top1_fill"></i>
        </div>
  </el-backtop>

 
</div>
</template>

<script>
import {getArticleList } from '@/api/article'
import { getUserInfo} from '@/api/user'
import {mapMutations} from 'vuex'
export default {
  name: 'ArticleList',
  props: {
  },
  data () {
    return {
      activeIndex:0,
      sortOptions:[
        {
          label:'推荐'
        },
        {
          label:'最新'
        },
        {
          label:'热榜'
        },
      ],
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
    ...mapMutations(['setCurArticle']),
    async getArticleList(){
      this.loading = true
      const result = await getArticleList()
      const userRes = await getUserInfo('6281f9815c3924c9a262103d')
      let userArtList = userRes.user.likeArticles
      if(result.success){
        this.articleList = this.isLikedHandler(userArtList,result.articleList)
      }
      this.loading = false
    },
    toDetail(article){
      this.setCurArticle(article)
      this.$router.push({
        name:'ArticleDetail'
      })
    },
    isLikedHandler(likeArticles,articleList){
       let newList =  articleList.map((article)=>{
        // let newArticle  = {...article,isLiked:likeArticles.includes(article.id)}
        // return newArticle
        article.isLiked = likeArticles.includes(article.id)
        return article
      })
      return newList
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
.main-wrapper{
   padding-top:60px;
   background-color: #fff;
}
.sort-box{
  height: 46px;
  width: 100%;
  padding-left:20px;
  line-height: 46px;
  span{
    padding:0 12px;
    font-size: 14px;
    &:hover{
      color:#007fff;
      cursor: pointer;
    }
    
  }
  .active{
      color:#007fff;
      font-weight: 500;
   }
  span:nth-of-type(1){
    padding-left:0;
  }
  span:nth-of-type(2){
    border-left:1px solid #e0e0e0;
    border-right:1px solid #e0e0e0;
  }
}
 .article-list{
   width: 100%;
  
 }
 .el-backtop{
  border-radius: 5px;
}
.backtop-box{
 .iconfont{
   font-size: 20px;
 }
}
</style>