<template>
  <div   class='head' 
    v-loading.fullscreen.lock="loading"
    
    element-loading-text="拼命掘金中..."
    element-loading-background="rgba(0, 0, 0, 0.5)">
     <a href="" target="_blank">
      <img src="../assets/images/logo.svg" alt="">
    </a>
      <el-menu :default-active="activeIndex"   mode="horizontal" @select="handleSelect" active-text-color="#409EFF">
        <el-menu-item index="1">综合</el-menu-item>
        <el-menu-item index="2">关注</el-menu-item>
        <el-menu-item index="前端">前端</el-menu-item>
        <el-menu-item index="后端">后端</el-menu-item>
      </el-menu>
      <img :src="user.image" alt="" class="avatar" v-if="isLogin">

      <div class="user-action-box" v-else >
        <el-button type="primary" size="small" @click="registerShow" plain>注册</el-button>
        <el-button type="primary" size="small" @click="loginShow" plain>登录</el-button>
      </div>
      <Login :visible.sync="loginVisible" @done="lodinDone" />
  </div>
</template>

<script>
import {login} from '@/api/user'
import {mapState, mapMutations } from 'vuex';
export default {
  name: 'Head',
  props: {
  },
  data () {
    return {
      loading:false,
      isLogin:false,
      loginVisible:false,
      registerVisible:false,
      activeIndex:'1',
      userInfo:{}
    }
  },
  created () { 

  },
  computed: { 
    ...mapState(['user'])
  },
  components: { 
    Login:()=>import('./Login'),
    Register:()=>import('./Register'),
  },
  methods: {
    ...mapMutations(['setUserInfo']),
    handleSelect(index){
      console.log('index: ', index);
    },
    loginShow(){
      this.loginVisible = true
    },
    registerShow(){
      this.registerVisible = true
    },
    async lodinDone(data){
      try {
        this.loading = true
        const result = await login(data)
        if(result.success){
          this.$notify({
            type:'success',
            message:result.msg
          })
          this.setUserInfo(result.user)
        }
      } catch (error) {
        console.log('error: ', error);
      }
      this.loading = false
    },
    registerDone(){
      
    },
    getUserInfo(){
      if(JSON.stringify(this.user) ==='{}' || !this.user){
        this.userInfo = JSON.parse(localStorge('user'))
      }else{
        this.userInfo = this.user
      }
    }
  },
  mounted () { 

  },
  watch: { 
    user:{
      deep:true,
      handler(val){
        console.log('val: ', val);
        if(val?.image){
          this.isLogin = true
        }else{
          this.isLogin = false
        }
      }
    }
  }
}
</script>
<style scoped lang='scss'>
 .head{
    display: flex;
    position: relative;
    align-items:center;
    height: 60px;
    padding:0 20px;
    width: 700px;
    background-color: #fff;
    position: fixed;
    z-index: 9;
   a{
    display: flex;
    height: 100%;
    align-items: center;
    img{
      width: 118px;
      height: 22px;
    }
   }
   .el-menu .el-menu-item {
     font-weight: 600;
   }
   .avatar{
     position: absolute;
     right:32px;
     display: block;
     width: 36px;
     height: 36px;
     border-radius: 50%;
   }
   .avatar:hover{
      transform: rotate(360deg);
      transition:all .5s ease-in-out;
   }
  
   .user-action-box{
     position: absolute;
     right:20px;
   }
 }
 .el-menu.el-menu--horizontal{
   border:none;
 }
 .el-menu .el-menu-item{
   padding:0;
   margin:0 20px;

 }
 .el-menu--horizontal>.el-menu-item.is-active{
   border-bottom:3px solid #007FFF !important;
 }
</style>