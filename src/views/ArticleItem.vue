<template>
  <div id='ArticleItem'  class='ArticleItem'>
     <div class="meta-container">
       <span class="user-message single-hide">{{articleMsg.username}}</span>
       <span class="date">{{articleMsg.date}}</span>
       <span class="tag-list" v-for="(tag,index) in articleMsg.tagList" :key="index"> {{tag}}</span>
     </div>
     <div class="content-wrapper">
       <div class="content-main">
         <div class="title single-hide">{{articleMsg.title}}</div>
         <div class="desc single-hide" >{{articleMsg.desc}}</div>
          <ul class="action-list">
            <li class="like iconfont icon-dianzan"><span class="number">{{articleMsg.likeCount}}</span></li>
            <li class="comment iconfont icon-pinglun"><span class="number">{{articleMsg.commentCount}}</span></li>
          </ul>
       </div>
       <img :src="articleMsg.cover"  class="cover">
     </div>
  </div>
</template>

<script>
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

  },
  mounted () { 

  },
  watch: { 

  }
}
</script>
<style scoped lang='scss'>
 .ArticleItem{
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
        }
      }
    }
 }
</style>