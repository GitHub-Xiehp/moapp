<template>
  <div class="home pd-top">
	 <!-- 1,轮播图 -->
    <banner
    :data="banner"
    collectionName="banner"
    />
	 <!-- 2,单元格 -->
	 <uc-cell 
	 v-for="(item,index) of list"
	 :key="item._id"
	 :data="item" 
	 :index="index" 
	 collectionName="home"
	 />
	
  </div>
</template>

<script>
import banner from '../components/banner/banner.vue'   
import UcCell from '../components/uc-cell/uc-cell.vue' 

  export default {
    name:'home',
    props:{},
    data(){
      return {
		 // 1,轮播图
        banner:[
			{_id:1,image:'/images/img_1.jpg',title:'标题1',sub_title:'标题1说明'},  //数据库的图片的路径就是banne冒号  ,banner.image,要改为banner
			{_id:2,image:'/images/img_2.jpg',title:'标题2',sub_title:'标题2说明'},
			{_id:3,image:'/images/img_3.jpg',title:'标题3',sub_title:'标题3说明'},
			{_id:4,image:'/images/img_1.jpg',title:'标题4',sub_title:'标题4说明'}
		] ,
		list:[
			{_id:1,title:'xxx1',des:'oo'},
			{_id:2,title:'xxx2',des:'oo'},
			{_id:3,title:'xxx3',des:'oo'}
		]
      }
    },
    components:{
		banner,UcCell
	},
    mounted(){
			// axios({
			// 		// 尝试1
			// 		// url:"http://localhost:3333/api/home"  ,//还没写  vue.config.js
			// 		// headers:{token:'1234567899123456'}
			// 		// 尝试2
			// 		// url:"/api/home",
			// 		// headers:{token:'1234567890123456'}   //token尝试要为16位的
			// 		// 尝试3
			// 		url:"/api/home",
			// 		// headers:{token:'1234567890123456'} , //尝试3-1  可以得到想要的数据 plugins/axios里面没写headers相关的;
			// 		//                                        尝试3-2  可以得到想要的数据    此位置也不写,plugins/axios里面写config.headers ={token:'1234567890123456'} 
			// 	}).then(res=>
			// 		console.log(res)  //{data: {…}, status: 200, statusText: "OK", headers: {…}, config: {…}, …}中的data: {err: 2, msg: "token无效或过期"}
			// 	)
			
			
			this.$axios({
				url:'/api/home',
				params:{_limit:20,_page:1}
			  }).then(
				res => 
				{
					// console.log(res)
					this.list = res.data.data
				}
			  ),
			  
			  this.$axios({
				url:'/api/banner',
				params:{_limit:3,_page:1}
			}).then(
			// console.log(res)  //{data: {…}, status: 200, statusText: "OK", headers: {…}, config: {…}, …}中的data: {err: 2, msg: "token无效或过期"}
				res => {
					// console.log(res)
					this.banner = res.data.data
				}
			)
		// 上面两个并行请求,并行无关联
	},
    updated(){},
    methods:{}
  }
</script>

<style>
  .home{}
</style>
