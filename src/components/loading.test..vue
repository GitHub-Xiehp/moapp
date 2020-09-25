<template>
  <div id="app">
      <h3>测试loading</h3>
	  <loading color="#8a6de1" />
	  <!-- 到底显示什么见loading.vue最下面的总结 -->
	  <!--  <loading color=""  /> -->   <!--  扩展   
	  <!-- <loading /> -->      <!--  扩展  -->  
	   <h3>测试loading</h3>
  </div>
</template>

<script>

import loading from '../components/loading.vue'   
	
export default {
  name: 'App',
  components: {
  loading,
	
  },
  methods:{
	
  },
  data(){
	  return {
		 
	  }
  }
}
</script>

<style>

</style>
