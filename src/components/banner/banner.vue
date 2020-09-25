<template>
  <div class="banner">
	  <ul class="clearfix">
		  <router-link
		  tag="li"
		  v-for="(item,index) of data"
		  :key="item._id"
	      :to="{name:'detail',params:{_id:item._id},query:{collectionName}}"
		  
		  >
		 
		   <img :src="item.banner" alt=""> <!-- //数据库的图片的路径就是banne冒号  ,item.image,要改为item.banner   item.image是自己添加死的数据 -->
		   <div class="text-box">
			   <h2>{{item.title}}</h2>
			   <p>{{item.sub_title}}</p>
		   </div>
		  </router-link>
	  </ul>
  </div>
</template>

<script>
	import Swipe from './js/swipe.js';   //Swipe做了修改,暴露出来可以这么用
	//import $ from 'jquery'   //安装的版本为3.5.0的,可以没问题  2选一之1
	// import $ from  './js/jquery-1.7.2.js' //老版本,没有模块那么一说,也没有暴露不可以
	import	'./js/jquery-1.7.2.js';// src ~~~  window.$ | jQuery  ,可以没问题  2选一之1
  export default {
    name:'banner',
    props:{
		data:{//根据数据库的形式定义的,数据库这么写的   //[{_id:xx,image:xx,title:xx,sub_title:xx}]
			type:Array,
			required:true
		},
		collectionName:{
			type:String,
			required:true
		}
	},
    data(){
      return {
      }
    },
    components:{},
    mounted(){
		this.data.length != 0 &&this.initSwiper()
	},
    updated(){
		this.initSwiper()
	},
    methods:{
		initSwiper(){
		     new Swipe($('.banner')[0], {
		       auto: 2000,
		       continuous: true,
		       stopPropation: true,
		       callback: function(index, element) {
		         $('.banner ol li').removeClass('active');
		         $('.banner ol li')
		           .eq(index)
		           .addClass('active');
		       }
		     });
		   }
		 }
  }
</script>

<style scoped>
 .banner{overflow: hidden;}
.banner ul li {
  position: relative;
  overflow: hidden;
  z-index: 1;
  width: 6.4rem;
  float: left;
}
.banner ul li img {
  width: 100%;
  display: block;
}
.banner ul li .text-box {
  width: 5.8rem;
  padding: 0 0.3rem;
  height: 1.24rem;
  position: absolute;
  left: 0;
  bottom: 0;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
}
.text-box h2 {
  font-size: 0.3rem;
  font-weight: normal;
  margin-top: 0.22rem;
  line-height: 100%;
  margin-bottom: 0.22rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.text-box p {
  line-height: 100%;
}

.banner ol {
  position: absolute;
  right: 0.2rem;
  bottom: 0.2rem;
}
.banner ol li {
  width: 0.15rem;
  height: 0.15rem;
  background: #5477b2;
  float: left;
  border-radius: 50%;
  margin-right: 0.08rem;
}
.banner ol li.active {
  background: #fff;
}
</style>


