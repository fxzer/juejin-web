<template>
  <div class="view-container ">
    <Head/>
    <router-view/>
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
 
</style>
