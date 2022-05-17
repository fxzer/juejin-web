<template>
  <div id='Head'  class='Head'>
   <a   href="" target="_blank">
      <img src="../assets/images/logo.svg" alt="">
    </a>
      <el-menu :default-active="activeIndex"   mode="horizontal" @select="handleSelect" active-text-color="#409EFF">
        <el-menu-item index="1">综合</el-menu-item>
        <el-menu-item index="2">关注</el-menu-item>
        <el-menu-item index="前端">前端</el-menu-item>
        <el-menu-item index="后端">后端</el-menu-item>
      </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Head',
  props: {
  },
  data () {
    return {
      activeIndex:'1'
    }
  },
  created () { 

  },
  computed: { 

  },
  components: { 

  },
  methods: {
    handleSelect(index){
      console.log('index: ', index);
    }
  },
  mounted () { 

  },
  watch: { 

  }
}
</script>
<style scoped lang='scss'>
 .Head{
   display: flex;
    height: 60px;
   a{
    background-color: #fff;
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
 }
</style>