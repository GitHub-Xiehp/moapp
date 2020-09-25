<template>
  <div id="app">
      <h3>测试导航</h3>
	  <!-- <UcNav></UcNav> -->
	  <!-- <uc-nav></uc-nav> -->
	  <uc-nav bg-color="transparent" :border-width='0' arrow="gray"></uc-nav>
  </div>
</template>

<script>

import UcNav from '../components/uc-nav/uc-nav.vue'   



export default {
  name: 'App',
  components: {
  UcNav,
	
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
