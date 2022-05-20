<template>
  <div id="register" class="register">
    <el-dialog
      title="用户注册"
      :visible.sync="visible"
      :modal-append-to-body="false"
      :close-on-click-modal="false"
      width="320px"
      :before-close="close"
    >
      <el-form
        :model="form"
        ref="formRef"
        :rules="rules"
        label-width="70px"
        size="medium"
      >
       <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名" ></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email" placeholder="请输入邮箱账号"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" placeholder="请输入密码" show-password></el-input>
        </el-form-item>

        <el-form-item label="简介" prop="bio" >
          <el-input v-model="form.bio" type="textarea" placeholder="请输入简介" ></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer">
        <el-button size="small" @click="close">取消</el-button>
        <el-button size="small" type="primary" @click="confirm">确定</el-button>
      </span>
      <img src="../assets/images/login.svg" class="login-top-img" />
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Register",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      form: {
        username:"",
        email: "",
        password: "",
        bio:""
      },
      rules: {
        email: [
          { required: true, message: "请输入邮箱账号", trigger: "blur" },
          { type: "email", message: "请输入正确邮箱", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 12, message: "密码长度在6-12", trigger: "change" },
        ],
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, max: 10, message: "密码长度在2-10", trigger: "change" },
        ],
        bio: [
          { required: false, message: "请输入简介", trigger: "blur" },
          { min: 4, max: 12, message: "密码长度在4-12", trigger: "change" },
        ],
      },
    };
  },
  created() {},
  computed: {},
  components: {},
  methods: {
    close() {
      this.$emit("update:visible", false);
    },
    confirm() {
       this.$refs.formRef.validate((valid) => {
         
          if (valid) {
              this.$emit("update:visible", false);
             this.$emit("done", {...this.form});
          } else {
            return  
          }
        });
    },
  },
  mounted() {},
  watch: {
     visible(val){
      if(!val){
        this.$refs.formRef.resetFields()
      }
    }
  },
};
</script>
<style scoped lang='scss'>
.register {
  .el-dialog {
    position: relative;
    .el-dialog__title {
      font-weight: 600;
    }
  }
  .login-top-img {
    width: 120px;
    height: 80px;
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translate(-50%, -100%);
  }
}
::v-deep .el-dialog .el-dialog__body {
  padding: 20px 20px 5px 20px !important;
}
.el-dialog__wrapper {
  display: flex;
  align-items: center;
  margin-top: -100px;
}
::v-deep .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    display: block;

    width: 60px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 20px;
    color: #8c939d;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
  .avatar {
    width: 60px;
    height: 60px;
    display: block;
  }
</style>