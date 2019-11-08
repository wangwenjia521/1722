<template>
	<swiper  class="icons index-icons" :options="swiperOption">
    <!-- slides -->
    <swiper-slide  class="icon-page"
    	v-for="(page, index) in pages" :key="index">
    	<div class="icon-list">
    		<div v-for="item in page" :key="item.id" class="icon-item">
    			<img  class="icon-img" :src="item.imgUrl" alt="" />
    			<p class="icon-title"> {{item.title}}</p>
    		</div>
    	</div>	
    </swiper-slide>
	
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>
<script>
	export default {
		name: 'icons',
		 data() {
	      return {
	        swiperOption: {
	         pagination: '.swiper-pagination'
	        }
	      }
	   },
		props: {
			icons: Array
		},
		computed :{
			pages () {
				const pages = []
				this.icons.forEach((value ,index) => {
					const page = Math.floor( index / 8 )
//					console.log(page)
					if(!pages[page]) {
						pages[page] = []
					}
					
					pages[page].push(value)
				})
				return pages
			}
		},
//		mounted () {
//			setTimeout(() => {
//				console.log(this.pages)
//			}, 2000)
//		}
	}
</script>

<style scoped lang="stylus">
	@import  '../../assets/styles/common/varibles.styl'
	.icons
	   width: 100%
	   padding-bottom: 0.6rem
	.icon-page
		overflow: hidden
		height: 0
		padding-bottom: 2.8rem
		.icon-list
			display:flex
			flex-wrap: wrap
			.icon-item
				width: 25%
				padding-top: .3rem
				text-align: center
				.icon-img
					width: .66rem
					height:.66rem
				.icon-title
					margin-top:	.16em
					font-size: .28rem
					color: #777
</style>
<style type="text/css" lang="stylus">
@import  '../../assets/styles/common/varibles.styl'
	
</style>