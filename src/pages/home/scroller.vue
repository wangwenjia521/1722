<template>
<div ref="scroller">
  <div class="content">
    <div class="item" v-for="item in sights" :key="item.id">
    	<img :src="item.imgUrl"/>
    	<div >
    		<p>{{item.title}}</p>
    		<p>{{item.desc}}</p>
    		 <p>{{item.price}}</p>
    	</div>
    </div>
  </div>
</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		name: 'scroller',
		props: {
			sights: Array
		},
		watch:{
			sights () {
				this.$nextTick(() => {
					this.scroller.refresh()
				})			
			}
		},
		mounted () {
			this.scroller = new BScroll(this.$refs.scroller)
		}
	}
</script>

<style>
</style>