<template>
  <div id="app">
	  <loading v-show="$root.bLoading"/>
	  <Header v-show="$root.bNav"/>
      <!-- <Header /> -->
	  <!-- 不写路由时,想展示那个,就得显示哪一个 麻烦 -->
	  <!-- <Home /> -->
	  <!-- <Follow /> -->
	  <!-- <Column /> -->
	  <!-- <Detail /> -->
	  <!-- <Login /> -->
	  <!-- <Reg /> -->
	  <!-- <User /> -->
	
	  <!-- 写路由,在展示区展示 -->
	 <router-view>	</router-view>
	  <!-- <Footer /> -->
	  <Footer v-show="$root.bFoot"/>
	
  </div>
</template>

<script>

import Header from './header.vue'   
import Footer from './Footer.vue'   
// import Home from '../pages/home.vue'   
// import Follow from '../pages/follow.vue'   
// import Column from '../pages/column.vue'   
// import Detail from '../pages/detail.vue'   
// import Login from '../pages/login.vue'   
// import Reg from '../pages/reg.vue'   
// import User from '../pages/user.vue'   
import loading from '../components/loading.vue'  
   

	
export default {
  name: 'App',
  components: {
    Header,Footer,loading
  },
  methods:{
	
  },
  data(){
	  return {
		 
	  }
  },
   watch:{
      $route:{
        handler(newVal){
          let path = newVal.path;
          if(/home|follow|column/.test(path)){
            this.$root.bNav=true;
            this.$root.bFoot=true;
          }
          if(/user/.test(path)){
            this.$root.bNav=false;
            this.$root.bFoot=true;
          }
          if(/login|reg|detail/.test(path)){
            this.$root.bNav=false;
            this.$root.bFoot=false;
          }
        },
        immediate:true
      }
    },
}
</script>

<style>

</style>
