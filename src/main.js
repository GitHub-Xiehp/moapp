import Vue from 'vue'
import App from './layouts/App.vue'

Vue.config.productionTip = false

//引入基础样式---所有的页面都用这个样式.
    //用变量接收是为了把它模块化,这样写,
	//或者说你的输入的姿势取决于输出姿势,它没有输出姿势
// import **(变量) from './assets/css/base.css'  
import  './assets/css/base.css'  //引入基础样式 ,用这种方式 ,约等于src


//字体比值控制       css使用的是媒体查询,js就要监测窗口有没有变化,有的话就需要设置(body.style.fontSize=...)(0955)
import   './assets/js/font.js' 



//引入路由配置
import router from './plugins/router.js'

//引入拦截器
import './plugins/axios';


//引入全局过滤器
import './filters'; 


let vm = new Vue({
  render: h => h(App),
  router,
  data:{
      bNav:false,
      bFoot:false,
      bLoading:true
    }
}).$mount('#app')

export default vm;