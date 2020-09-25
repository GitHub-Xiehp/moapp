<template>
 <!-- 1,单元格 -->
  <div class="column pd-top">
	 <uc-cell 
	 v-for="(item,index) of list"
	 :key="item._id"
	 :data="item" 
	 collectionName="column"
	 />
   </div>
</template>

<script>
	import UcCell from '../components/uc-cell/uc-cell.vue' 
  export default {
    name:'column',
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
		this.$axios({
		        url:'/api/column',
		        params:{_limit:10,_page:1}
		      }).then(
		        res => this.list = res.data.data
		      )
	},
    updated(){},
    methods:{}
  }
</script>

<style>
   .column{padding-left: 0.34rem;padding-right: 0.34rem;}
</style>

