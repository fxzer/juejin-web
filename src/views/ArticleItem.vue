<template>
  <div  class='article-item'>

     <div class="meta-container">
       <span class="user-message single-hide">{{articleMsg.author.username}}</span>
       <span class="date">{{formatDate(articleMsg.createAt)}}</span>
       <span class="tag-list" v-for="(tag,index) in articleMsg.tagList" :key="index"> {{tag}}</span>
     </div>

     <div class="content-wrapper">
       <div class="content-main">
         <div class="title single-hide">{{articleMsg.title}}</div>
         <div class="desc single-hide" >{{articleMsg.desc}}</div>
          <ul class="action-list">
            <li class="like iconfont " :class="articleMsg.isLiked ?'icon-shoucang1':'icon-shoucang'" 
            @click.stop="collectArticle"><span class="number">{{articleMsg.likeCount}}</span></li>
            <li class="comment iconfont icon-pinglun"><span class="number">{{articleMsg.commentCount}}</span></li>
          </ul>
       </div>
       <img :src="articleMsg.cover"  class="cover">
     </div>
  </div>
</template>

<script>
import { formatDate } from '@/util/format'
import { collectArticle } from '@/api/article'
export default {
  name: 'ArticleItem',
  props: {
    articleMsg:{
      type:Object,
      default:()=>{}
    }
  },
  data () {
    return {
    }
  },
  created () { 

  },
  computed: { 

  },
  components: { 

  },
  methods: {
    formatDate,
   async collectArticle(){
     try {
       const result = await collectArticle(this.articleMsg.id)
       if(result.success){
         this.$notify({
           type:'success',
           message:result.msg
         })
       }
      if(this.articleMsg.isLiked){
         this.articleMsg.likeCount --
         this.articleMsg.isLiked = false
       }else{
          this.articleMsg.likeCount ++
          this.articleMsg.isLiked = true
       }
      
     } catch (error) {
       console.log('error: ', error);
       
     }

    }
  },
  mounted () { 

  },
  watch: { 

  }
}
</script>
<style scoped lang='scss'>
 .article-item{
    width: 100%;
    position: relative;
    cursor: pointer;
    padding: 12px 20px 0;
    height:140px;
    border-top: 1px solid #F1F1F1;
    //信息
    .meta-container{
      height:22px;
      line-height: 22px;
      color:#86909c;
       .user-message{
        max-width: 200px;
        margin-right:10px;
        color:#4e5969;
        &:hover{
          color:#007fff;
        }
      }
      .date{
        padding:0 10px;
         border-left: 1px solid #F1F1F1;
         border-right: 1px solid #F1F1F1;
      }
     
      .tag-list{
        margin-left:10px;
        position: relative;
        line-height: 22px;
      }
      .tag-list +.tag-list::before{
        position:absolute;
        top:50%;
        left:-5px;
        transform: translate(0,-50%);
        content:'';
        display: inline-block;
        width: 3px;
        height:3px;
        vertical-align: middle;
        border-radius: 50%;
        background-color:#666;
      }
    }
    // 内容
    .content-wrapper{
      padding:10px 0;
      display: flex;
      align-items:cetner;
      //封面
      .cover{
        width: 120px;
        height: 80px;
      }
      .content-main{
        flex:1;
        .title{
          font-size: 16px;
          color:#1d2129;
          font-weight: 600;
          height:24px;
          line-height: 24px;
        }
        .desc{
          margin:10px 0;
          width: 516px;
          color:#86909c;
          line-height: 22px;
          font-size: 13px;
        }
        .action-list{
          display: flex;
          height: 20px;
          line-height: 20px;
          color:#86909c;
          li{
            padding:0 5px;
            font-size: 13px;
            .number{
              padding:3px;
            }
          }
          .icon-shoucang1{
            color:#FFB800;
          }
        }
      }
    }
 }
</style>