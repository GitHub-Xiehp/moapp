<template>
	<!-- <h3>测试loading</h3> -->
	<frame-screen type="list" v-if="list.length===0"></frame-screen>  <!--左侧第一个list 和第二个不是指的同一个内容-->
	<div v-else>我是加载完成真正显示的内容:{{list}}</div>
</template>

<script>

import FrameScreen from '../components/frame-screen.vue'   
	


export default {
  name: 'App',
  components: {
	FrameScreen,
  },
  methods:{
	
  },
  mounted(){
	  setTimeout(()=>{
	  	this.list=['aa','bb','cc','dd']
	  },1000)
  },
  data(){
	  return {
		 list:[],
	  }
  }
}
</script>

<style>

</style>
