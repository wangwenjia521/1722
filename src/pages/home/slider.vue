<template>
	<swiper :options="swiperOption" ref="mySwiper" class="banner-page">
    <swiper-slide v-for="item in silders" :key="item.id">
    	<div class="banner">
    		<img :src="item.imgUrl" alt="" class="banner-img">
    	</div>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
	export default {
  name: 'index-silder',
  props: {
    silders: Array
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
@import '../../assets/styles/common/varibles.styl'
  .banner-page
   
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