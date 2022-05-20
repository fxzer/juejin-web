<template>
  <div class="view-container ">
    <Head/>
  <div class="main-box">
      <router-view/>
  </div>
  </div>
</template>
<script>
export default {
  data(){
    return  {
      
    }
  },
  methods:{
    
  },
  components:{
    Head:()=> import('./views/Head.vue')
  }
}
</script>
<style lang="scss">
 .view-container{
   width: 700px;
 }
 .main-box{
   margin-top:70px;
 }
 
</style>
