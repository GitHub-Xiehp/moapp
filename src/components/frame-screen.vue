<template>
  <div class="frame-screen-list  pd-top"  v-if="type==='list'">
    <div class="swiper">swiper</div>
    <div class="item">item1</div>
    <div class="item">item2</div>
    <div class="item">item3</div>
    <div class="item">item4</div>
    <div class="item">item5</div>
    <div class="item">item6</div>
  </div>
  
  <div class="frame-screen-detail" v-else>
    <div class="nav">nav</div>
    <div class="user">
      <div class="icon">icon</div>
      <div class="username">username</div>
    </div>
    <div class="title">title</div>
  </div>
</template>

<script>
  export default {
    props:{
			type:{
				type:String,
				}
			},
    }
</script>

<style scoped>
</style>


 
