<template>
	 <swiper :options="swiperOption" ref="mySwiper" class="banner-page">
    <!-- slides -->
    <swiper-slide v-for="item of sliders" :key="item.id" >
    	<div class="banner">
    		<img  class="banner-img":src="item.imgUrl" alt="" />
    	</div>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
	export default {
  name: 'sliders',
  props: {
    sliders: Array
  },
  data () {
    return {
      swiperOption: {
        direction: 'horizontal',
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  }
}
</script>

<style scoped lang="stylus">

  .banner-page
    width: 100%
  	.banner
  		width: 100%
  		height: 0
  		padding-bottom: 31.25%
  		.banner-img
  			width: 100%
</style>

<style lang="stylus">
	.banner-page
		.swiper-pagination-bullet-active
			background: #fff
</style>

