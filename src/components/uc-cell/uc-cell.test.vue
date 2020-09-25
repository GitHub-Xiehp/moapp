<template>
  <div id="app">
      <h3>测试单元格</h3>
	  <!-- 功能1： -->
      <uc-cell :data="{_id:3,title:'xxx',des:'oo'}" :index="0" collectionName="detail"></uc-cell>
	  <!-- 功能2：isAdd存在，为真 -->
	  <uc-cell :data="{_id:3,title:'xxx',des:'oo'}"></uc-cell>
	  <!-- 功能3： -->
	  <uc-cell :data="{_id:3,title:'xxx',des:'oo'}"  isAdd @add-item='show'></uc-cell>
	  <!-- 功能4： -->
	  <uc-cell :data="{_id:3,title:'xxx',des:'oo'}" collectionName="detail" isAdd  @add-item="show"></uc-cell>
	  <h3>上面4个功能</h3>
  </div>
</template>

<script>

import UcCell from '../components/uc-cell/uc-cell.vue'   
	
export default {
  name: 'App',
  components: {
    UcCell,
  },
  methods:{
	show(ev){
		console.log(ev)
	}
  },
  data(){
	  return {
		 
	  }
  }
}
</script>

<style>

</style>
<!-- 有个样式小问题，有瑕疵 -->
