<template>
  <div class="user-info-wrapper">
    <div class="header-box">
      <img :src="userInfo.image"  class="avatar">
      <div class="user-info">
        <el-input v-model.trim="username" ref="userNameRef"   placeholder="请输入用户名" v-if="isEdit" @blur="updateUserName" /> 
        <div class="username" v-else>{{userInfo.username}}</div>
        <div class="brief signle-hide">{{userInfo.bio}}</div>
      </div>
      <div class="user-info-actions">
        <el-button type="primary" size="small" @click="editUser" plain>
          {{isEdit ? '保存个人信息': '编辑个人信息'}}
        </el-button>
        <div class="user-list">
          <div class="follow">
            <p>关注了</p>
            <p class="follow-num">{{followNum}}</p>
          </div>
          <div class="fans">
            <p>关注者</p>
            <p class="fans-num">{{fansNum }}</p>
          </div>
        </div>
      </div>
    </div>
    <ArticleList cate="currentUser"  />
  </div>
</template>

<script>
import { getUserInfo,updateUser} from '@/api/user'
export default {
  name: "UserInfo",
  props: {},
  
  data() {
    return {
      userInfo:{},
      editShow:false,
      isEdit:false,
      username:"",
    };
  },
  created() {},
  computed: {
     followNum(){
        return this.userInfo?.followList?.length || 0
      },
     fansNum(){
        return this.userInfo?.followList?.length || 0
      }
  },
  components: {
     ArticleList:()=> import('./ArticleList.vue')
  },
  methods: {
    editUser(){
      if(this.isEdit){
        this.updateUserName()
        this.isEdit = false
      }else{
        this.isEdit = true
        this.$nextTick(()=>{
          this.$refs.userNameRef.focus()
        })
        this.username = this.userInfo.username
      }
    },
   async  updateUserName(){
     if(!this.username || this.username ===this.userInfo.username){
     }else{
       await updateUser({...this.userInfo,username:this.username})
       this.getUserInfo()
     }
     this.isEdit = false
    },
    async getUserInfo(){
      let id = JSON.parse(localStorage.getItem('user'))?.id
      if(id){
        let result = await getUserInfo(id) 
          this.userInfo = result.user
      }
  }
  },
  mounted() {
    this.getUserInfo()
  },
  watch: {},
};
</script>
<style scoped lang='scss'>
.user-info-wrapper{
  width: 100%;
  background-color: #ffffff;
  .header-box{
    padding:10px 10px;
    display: flex;
    align-items:center;
    .avatar{
      display: block;
      width: 90px;
      height: 90px;
      margin-right: 20px;
      border-radius: 50%;
    }
    .user-info{
      flex: 1;
      .username{
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 16px;
      }
      .el-input{
        margin-bottom: 12px;
        font-size: 24px;
      }
      .brief{
        font-size: 14px;
        color: #72777b;
      }
    }
    .user-info-actions{
      width: 160px;
      display:flex;
      align-items:center;
      flex-direction: column;
      .el-button{
        margin-bottom: 8px;
      }
      .user-list{
        height: 32px;
        display: flex;
        justify-content: space-between;
        .fans,.follow{
           padding:0 12px;
           text-align: center;
            .follow-num,.fans-num{
              margin-top: 6px;
              font-size: 16px;
              font-weight: 600;
         }
        }
        .fans{
          border-left: 1px solid #cecfcf;
        }
       
      }
    }
  }
}
</style>