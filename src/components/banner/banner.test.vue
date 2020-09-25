<template>
  <div id="app">
	  <h3>轮播图测试</h3>
      <banner
	  :data="list"
	  collectionName="detail"
	  />

  </div>
</template>

<script>

import banner from '../components/banner/banner.vue'   
	


export default {
  name: 'App',
  components: {
	  banner,
  },
  methods:{
  },
  data(){
	  return {
		list:[] ,
	  }
  },
  mounted(){
	  setTimeout(()=>{
	  	this.list=[
	  		{_id:1,image:'/images/img_1.jpg',title:'标题1',sub_title:'标题1说明'},
	  		{_id:2,image:'/images/img_2.jpg',title:'标题2',sub_title:'标题2说明'},
	  		{_id:3,image:'/images/img_3.jpg',title:'标题3',sub_title:'标题3说明'},
	  		{_id:4,image:'/images/img_1.jpg',title:'标题4',sub_title:'标题4说明'}
	  	];
	  },1000)
  }
}
</script>

<style>

</style>
