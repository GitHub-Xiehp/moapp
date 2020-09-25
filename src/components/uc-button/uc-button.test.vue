<template>
  <div id="app">
     
    <!-- 测试1-----按钮 -->
	 
	<h3>头条--测试</h3> -->
	<UcButton />
	 <uc-button />
	 <uc-button text='登 录' /> 
	 <uc-button bg-color="#399" />
	 <uc-button>注 册</uc-button>
	 <uc-button @xx="show">点击</uc-button>
	 
	 

	 
  </div>
</template>

<script>
import UcButton from '../components/uc-button/uc-button.vue'   //测试1-----按钮

	


export default {
  name: 'App',
  components: {
    UcButton,    //测试1-----按钮
	
  },
  methods:{
	  show(ev){
		  console.log(ev);
	  }
  }
}
</script>

<style>

</style>
