<template>
  <div id="app">
      
	 <!-- 测试2-----输入框 -->
	 <h3>测试输入框</h3>
	 <UcInput/>
	 <uc-input v-model="ipt"></uc-input>
	 <uc-input v-model="ipt2" type="password" label="密 码"></uc-input>
	 <!-- 控制台 $attrs和props并级,插件查看, $attrs表示能够获取到你在调用这个组件时传递给他的一堆属性  如上面就是 label:"密 码"  type:"password"  value:"bc"
	  使用v-model时,接管了属性value,所以有上面的三个,
	   目标组件定义了两个,所以 控制台上 props 有2个,label:**,和,type:**,
	      value(没被定义)收纳到$attrs里面     $attrs 有一个 value:** 一个
		  形成一个实例属性  this|vm.$attrs
-->
  </div>
</template>

<script>

import UcInput from '../components/uc-input'   //测试2-----输入框
	


export default {
  name: 'App',
  components: {
    UcInput,   //测试2-----输入框
	
  },
  methods:{
	  show(ev){
		  console.log(ev);
	  }
  },
  data(){
	  return {
		  ipt:'bmw',
		  ipt2:''
	  }
  }
}
</script>

<style>

</style>
