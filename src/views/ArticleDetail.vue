<template>
  <div  class='article-detail'>
     <h2 class="single-hide">{{articleData.title}}</h2>
     <div class="author-info-block">
       <img :src="avatar"  class="avatar">
       <div class="user-info-box">
         <div class="user-name">{{username}} </div>
         <div class="date-time">{{timeFormat(articleData.createAt)}} </div>
       </div>
       <el-button type="primary"   @click="follow" size="small"  icon="el-icon-plus" plain>关注</el-button>
     </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { timeFormat } from '@/util/format'
import {followUser} from '@/api/profile'
export default {
  name: 'ArticleDetail',
  props: {
  },
  data () {
    return {
      articleData:{},
      defalutAvatar:'https://p26-passport.byteacctimg.com/img/user-avatar/61130727b6e6bf9ed813434aeaed8ac3~300x300.image'
    }
  },
  created () { 

  },
  computed: { 
    ...mapState(['curArticle']),
    avatar(){
      return   this.articleData?.author?.image || this.defalutAvatar
    },
    username(){
      return this.articleData?.author?.username
    }
  },
  components: { 

  },
  methods: {
    ...mapMutations(['setCurArticle']),
    timeFormat,
    async follow(){
      try {
        let id = this.articleData?.author?.id
        console.log('id: ', id);
        const result = await followUser(id)
        if(result.success){
          this.$notify({
            type:'success',
            message:result.msg
          })
        }
        console.log('result: ', result);
      } catch (error) {
        console.log('error: ', error);
      }
    },
      //判断是否已关注
    judgeFollow(userId,followList){
      return followList.includes(userId)
    }
  },
  mounted () { 
    if(JSON.stringify(this.curArticle) == '{}' || !this.curArticle){
      this.articleData = JSON.parse(localStorage.getItem('curArticle'))
    }else{
      this.articleData = this.curArticle
    }
    // this.articleData.isFollow = this.judgeFollow( this.articleData.author.id,)
    
  },
 
  watch: { 

  },
  beforeRouteLeave (to, from, next) {
    this.setCurArticle()
    next()
  } 
}
</script>
<style scoped lang='scss'>
 .article-detail{
    width: 700px;
    margin-top:70px;
    background-color: #fff;
    padding:32px;
    h2{
      max-width: 100%;
      margin: 0 0 16px 0;
      font-size: 32px;
      font-weight: 600;
      line-height: 1.3;
      color: #252933;
    }
    .author-info-block{
      display: flex;
      align-items:center;
      .avatar{
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
      .user-info-box{
        flex-grow: 1;
        padding:0 12px;
        .user-name{
          height: 24px;
          line-height: 24px;

          font-size: 16px;
          color:#515767;
        }
        .date-time{
          font-size: 14px;
          color:#8a919f;
          height: 18px;
          line-height: 18px;
        }
      }
      .el-button{
        padding:8px 10px;
      }
    }
 }
</style>