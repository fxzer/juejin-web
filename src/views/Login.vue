<template>
   <div id='login'  class='login'>
     <el-dialog
       title="用户登录"
       :visible.sync="visible"
       :modal-append-to-body="false"
       :close-on-click-modal="false"
       width="320px"
       :before-close="close">
        <el-form :model="form" ref="formRef" :rules="rules" label-width="50px"  size="medium">
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
         
          <el-form-item label="密码" prop="password">
            <el-input v-model="form.password" show-password></el-input>
          </el-form-item>
        </el-form>
        
       <span slot="footer">
         <el-button  size="small" @click="close">取消</el-button>
         <el-button  size="small" type="primary" @click="confirm">确定</el-button>
       </span>
       <img  src="../assets/images/login.svg" class="login-top-img"  >
     </el-dialog>
  </div>  
</template>

<script>
export default {
  name: 'login',
  props: {
    visible:{
      type:Boolean,
      default:false
    }
  },
  data () {
    return {
      form:{
        email:'',
        password:''
      },
      rules:{
        email:[
          { required:true,message:'请输入邮箱账号',trigger:'blur'},
          { type:'email',message:'请输入正确邮箱',trigger:'blur'},
        ],
        password:[
          { required:true,message:'请输入密码',trigger:'blur'},
          { min:6,max:12,message:'密码长度在6-12',trigger:'change'},
        ],
      }
    }
  },
  created () { 

  },
  computed: { 
  },
  components: { 

  },
  methods: {
    close(){
      this.$emit('update:visible',false)
    },
    confirm(){
      this.$emit('update:visible',false)
      this.$emit('done',this.form)
    }
  },
  mounted () { 

  },
  watch: { 

  }
}
</script>
<style scoped lang='scss'>
 .login{
   .el-dialog{
     position: relative;
     .el-dialog__title{
       font-weight: 600;
     }
 
   }
   .login-top-img{
     width: 120px;
     height: 80px;
     position:absolute;
     top:8px;
     left:50%;
     transform: translate(-50%,-100%);
   }
 }
 ::v-deep  .el-dialog .el-dialog__body {
    padding: 20px 20px 5px 20px !important;
}
.el-dialog__wrapper{
    display: flex;
    align-items: center;
    margin-top: -100px;
}
</style>