<template> 
 <div class="spinner">
    <div class="spinner-container container1">
      <div class="circle1" :style="{'background-color':color}"></div>
      <div class="circle2" :style="{'background-color':color}"></div>
      <div class="circle3" :style="{'background-color':color}"></div>
      <div class="circle4" :style="{'background-color':color}"></div>
    </div>
    <div class="spinner-container container2">
      <div class="circle1" :style="{'background-color':color}"></div>
      <div class="circle2" :style="{'background-color':color}"></div>
      <div class="circle3" :style="{'background-color':color}"></div>
      <div class="circle4" :style="{'background-color':color}"></div>
    </div>
    <div class="spinner-container container3">
      <div class="circle1" :style="{'background-color':color}"></div>
      <div class="circle2" :style="{'background-color':color}"></div>
      <div class="circle3" :style="{'background-color':color}"></div>
      <div class="circle4" :style="{'background-color':color}"></div>
    </div>
  </div>
  
</template>

<script>
  export default {
    name:'loading',
    props:{
		color:{
			type:String,
			default:'#5477B2',
		}
	},
    data(){
      return {
        
      }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped="scoped">
  .spinner {
    /* margin: 100px auto; */
    width: 20px;
    height: 20px;
    /* position: relative; */
	position: fixed;
	left: 50%;
	top:50%;
	transform: translate(-50%,-50%);
  }
   
  .container1 > div, .container2 > div, .container3 > div {
    width: 6px;
    height: 6px;
    /* background-color: #333; */
    background-color:green;    	/* 绿色更醒目 */  

    border-radius: 100%;
    position: absolute;
    -webkit-animation: bouncedelay 1.2s infinite ease-in-out;
    animation: bouncedelay 1.2s infinite ease-in-out;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
   
  .spinner .spinner-container {
    position: absolute;
    width: 100%;
    height: 100%;
  }
   
  .container2 {
    -webkit-transform: rotateZ(45deg);
    transform: rotateZ(45deg);
  }
   
  .container3 {
    -webkit-transform: rotateZ(90deg);
    transform: rotateZ(90deg);
  }
   
  .circle1 { top: 0; left: 0; }
  .circle2 { top: 0; right: 0; }
  .circle3 { right: 0; bottom: 0; }
  .circle4 { left: 0; bottom: 0; }
   
  .container2 .circle1 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }
   
  .container3 .circle1 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }
   
  .container1 .circle2 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }
   
  .container2 .circle2 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }
   
  .container3 .circle2 {
    -webkit-animation-delay: -0.7s;
    animation-delay: -0.7s;
  }
   
  .container1 .circle3 {
    -webkit-animation-delay: -0.6s;
    animation-delay: -0.6s;
  }
   
  .container2 .circle3 {
    -webkit-animation-delay: -0.5s;
    animation-delay: -0.5s;
  }
   
  .container3 .circle3 {
    -webkit-animation-delay: -0.4s;
    animation-delay: -0.4s;
  }
   
  .container1 .circle4 {
    -webkit-animation-delay: -0.3s;
    animation-delay: -0.3s;
  }
   
  .container2 .circle4 {
    -webkit-animation-delay: -0.2s;
    animation-delay: -0.2s;
  }
   
  .container3 .circle4 {
    -webkit-animation-delay: -0.1s;
    animation-delay: -0.1s;
  }
   
  @-webkit-keyframes bouncedelay {
    0%, 80%, 100% { -webkit-transform: scale(0.0) }
    40% { -webkit-transform: scale(1.0) }
  }
   
  @keyframes bouncedelay {
    0%, 80%, 100% {
      transform: scale(0.0);
      -webkit-transform: scale(0.0);
    } 40% {
      transform: scale(1.0);
      -webkit-transform: scale(1.0);
    }
  }
</style>

<!-- 样式修改内容: 
1,上面注释的
2下面写的
小结:元素居中,父级为body
 <h3>测试loading</h3>
  <loading />
  <h3>测试loading</h3>
 结果是两个h3标签挨着,因为loduing组件做了定位,并且是在body的正中间;

功能:未来加载图标的颜色可以变更,通用组件,可以变更颜色,需要父组件传入
[老师在样式里:追加 (改变权重)
.spinner .spinner-container div{
    background-color: #f00;
  }
  
  原始的#ccc 删除掉了]
[
	没有做老师追加的样式:
	直接在原始的基础上改的
	
1,原始的css基础样式存在:
	<loading color="#8a6de1" />  仅左边显示  父组件传递过来的颜色 #8a6de1
	<loading color=""  />        仅左边显示  css样式里写的样式
	<loading />                  仅左边显示  自己写的,pros里的默认的样式

2,原始的css基础样式存在:
    <loading color="#8a6de1" />  仅左边显示  父组件传递过来的颜色 #8a6de1
    <loading color=""  />        仅左边显示  压根就没有图标
    <loading />                  仅左边显示  自己写的,pros里的默认的样式
	
	
	
]
 -->
