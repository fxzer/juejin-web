<template>
<div class="main-wrapper ">
  <div class="sort-box">
    <span v-for="(item,index) in sortOptions" :key="index" 
    @click="getArticleListByCate(item,index)" :class="activeIndex == index?'active':''">{{item.label}}</span>
  </div>
  <div id='ArticleList'  class='article-list'  
    v-loading.fullscreen.lock="loading"
    element-loading-text="拼命掘金中..."
    element-loading-background="rgba(0, 0, 0, 0.5)">
    <ArticleItem v-for="article in articleList" :articleMsg="article" :key="article.id"
     @click.native="toDetail(article)"></ArticleItem>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40,50,100]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalCount">
    </el-pagination>
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
    cate:{
      type:String,
      default:'notify'
    },
  },
  data () {
    return {
      activeIndex:0,
      currentPage:0,
      pageSize:20,
      totalCount:0,
      sortOptions:[
        {
          label:'推荐',
          key:'notify',
        },
        {
          label:'最新',
          key:'latest'
        },
        {
          label:'热榜',
          key:'hot'
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
    handleSizeChange(val) {
        this.pageSize = val
       this.getArticleList(this.cate)
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.offset = (val-1) *this.pageSize
      this.getArticleList(this.cate)
    },
    async getArticleList(cate){
      this.loading = true
       let result = null
      try {
        switch(cate){
          case 'notify':
            let {totalCount} = await getArticleList({limit:200})
            let offset = Math.ceil(Math.random()*(totalCount-10)) 
             result = await getArticleList({offset,limit:this.pageSize})
             this.totalCount = totalCount
            break;
          case 'latest':
            result = await getArticleList({offset:this.offset,limit:this.pageSize,sortBy:{updtedAt:-1}})
            this.totalCount = result.totalCount
            break;
          case 'hot':
            result = await getArticleList({offset:this.offset,limit:this.pageSize,sortBy:{likeCount:-1}})
            console.log('result: ', result);
            this.totalCount = result.totalCount
            break;
          case 'currentUser':
            let author = JSON.parse(localStorage.getItem('user'))?.username
             result = await getArticleList({offset:this.offset,limit:this.pageSize,author,sortBy:{updtedAt:-1}})
            console.log('result: ', result);
            this.totalCount = result.totalCount
            break;
        }
      
        let id = JSON.parse(localStorage.getItem('user'))?.id
        let userArtList  = []
        if(id){
            const userRes = await getUserInfo(id)
            userArtList = userRes.user.likeArticles
        }
      if(result?.success){
        this.articleList = this.isLikedHandler(userArtList,result.articleList)
      }
      } catch (error) {
        console.log('error: ', error);
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
    },
    getArticleListByCate(item,index){
      this.activeIndex = index
      this.getArticleList(item.key)
    }
  },
  mounted () { 
    this.getArticleList(this.cate)
  },
  watch: { 
    user:{
      deep:true,
      handler(val){
         this.getArticleList(this.cate)
      }
    }
  }
}
</script>
<style scoped lang='scss'>
.main-wrapper{
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
 .el-pagination{
    border-top:1px solid #F1F1F1 ;
    padding:8px 0;
    text-align: center;
    margin-bottom: 10px;
 }
</style>