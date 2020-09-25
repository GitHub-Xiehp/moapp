<template>
  <div class="uc-cell">
	<div @click="toDetail">
		 <h2><span v-show="index != null">{{index + 1}}.</span>{{data.title}}</h2>
		 <p>{{data.des}}</p>
		<!-- @click.stop阻止触发父级的点击事件,阻止冒泡 -->
		<a class="cell__anchor" v-if="isAdd" href="javascript:;" @click.stop="$emit('add-item',$event)">+</a>
	</div>
  </div>
</template>

<script>
  export default {
    name:'uc-cel',
    props:{
		data:{ //{_id:xx,title:xx,des:xx}
			type:Object,
			required:true
		},
		collectionName:{
			type:String,
			default:null
		},
		index:{
			type:Number,
			default:null
		},
		isAdd:{  //单元格后面是否添加内容,默认没有东西
			type:Boolean,
			default:false,
		}
	},
    data(){
      return {
        
      }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{
		toDetail(){
			if(this.collectionName){
				this.$router.push(`/detail/${this.data._id}?collectionName=${this.collectionName}`)
			}
		}
	}
  }
</script>

<style>
   /* .uc-cell{padding: 0 0.4rem} X: 控制边距的,注释掉,由使用方决定 */
   .uc-cell{position: relative;}
   .uc-cell:active {background: #ccc;}
   .uc-cell div { color:#494d4d; padding:0.2rem 0; border-bottom:1px dashed #ccc;}
   .uc-cell div h2{max-height:0.9rem; font-size:0.33rem; overflow:hidden;}
   .uc-cell div p{max-height:1.8rem; margin-top:0.05rem;overflow:hidden;}
   .cell__anchor{position:absolute;right:0.3rem;top:0.4rem;}
</style>

