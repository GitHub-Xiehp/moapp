<template>
 <!-- 1,单元格 -->
  <div class="follow pd-top">
	 <uc-cell 
	 v-for="(item,index) of list"
	 :key="item._id"
	 :data="item" 
	 :index="index" 
	 collectionName="follow"
	 />
   </div>
</template>

<script>
	import UcCell from '../components/uc-cell/uc-cell.vue' 
  export default {
    name:'follow',
    props:{},
    data(){
      return {
        list:[
        	// {_id:1,title:'xxx1',des:'oo'},
        	// {_id:2,title:'xxx2',des:'oo'},
        	// {_id:3,title:'xxx3',des:'oo'}
        ]
      }
    },
    components:{
		UcCell,
	},
    mounted(){
		// console.log(this,111)
		 // this.$root.bLoading = true //loding 初体验,最后放到拦截器了 ,避免每个请求都写 ,但在axios.js不能写成this
		 this.$axios({
		        url:'/api/follow',
		        params:{_limit:15,_page:1}
		      }).then(
			 
		        res => {
					  // this.$root.bLoading = false //loding 初体验,最后放到拦截器了 ,避免每个请求都写 ,但在axios.js不能写成this
					  this.list = res.data.data
					  	// console.log(this,222)
				}
		      )
	},
    updated(){},
    methods:{}
  }
</script>

<style>
   .follow{padding-left: 0.34rem;padding-right: 0.34rem;}
</style>
