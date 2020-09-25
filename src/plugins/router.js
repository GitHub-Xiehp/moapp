import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from '../pages/home.vue'
import Follow from '../pages/follow.vue'
import Column from '../pages/column.vue'
import Detail from '../pages/detail.vue'
import user from '../pages/user.vue'
import Login from '../pages/login.vue'
import Reg from '../pages/reg.vue'
import NoPage from '../pages/no-page.vue'

let routes =[
	// {path:'/detail',name:'detail',component:"Detail"}     //服务于第一次的轮播图初体验
	{path:'/home',component:Home},
	{path:'/follow',component:Follow},
	{path:'/column',component:Column},
	//这样定义路由,path:":id",component:Detail中的  这个component:Detail展示区就不会再一级展示区展示了,这里的component:Detail指向就会找二级展示区展示

	// {path:'detail',component:Detail,children:[ //访问/detail 一级
	// 	{path:":id",component:Detail}   //访问/detail/** 二级
	// ]}   
	
	
	//这样定义路由,还是在一级展示区里面,因为我们的视图决定了跳转时如果是详情整个展示区全部替换掉,那就是在一级展示区里面
	{path:'/detail/:_id',component:Detail, name:'detail'},   //不能/没机会  访问Detail必须访问 Detail/**,然后我会在一级展示区里面展示
	
	{path:'/user',component:user,name:'user'},
	{path:'/Login',component:Login},
	{path:'/reg',component:Reg},
	{path:'/',redirect:'/home'},
	{path:'*',component:NoPage},
]

let router = new VueRouter({
	routes
})

export default router;



