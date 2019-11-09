<template>
<div  class="main">
	<index-header></index-header>
	<slider :sliders = "sliders"></slider>
	<icons :icons="icons"></icons>
	<scroller class="scroller" :sights="sights"></scroller>
</div>
</template>

<script>
	import IndexHeader from './header'
	import Slider from './slider'
	import Icons from './icons'
	import Scroller from './scroller'
	import axios from 'axios'
	import {mapState, mapMutations } from 'vuex'
	export default {
		name: 'index',
		components: {
			IndexHeader,
			Slider,
			Icons,
			Scroller
		},
		data () {
			return {
				sliders: [],
				icons: [],
				sights: []
			}
		},
		computed: {
			...mapState(['city'])
		},
		methods: {
			...mapMutations(['changeCity']),
			getIndexData () {
			   axios.get('/api/index.json')
			  .then(this.handleDataSucc.bind(this)).catch(this.handleDataError.bind(this))
			},
			handleDataSucc (res) {
				res = res ? res.data: null;
				if(res && res.ret && res.data) {
					res.data.sliders && (this.sliders = res.data.sliders)
					res.data.icons && (this.icons = res.data.icons)
					res.data.list &&(this.sights = res.data.list)
					res.data.city &&(this.changeCity(res.data.city))
				} else {
					this.handleDataErr()
				}
			},
			handleDataError (err) {
				console.log(err)
			}
			
		},
		created () {
			this.getIndexData()
		}
	}
</script>

<style scoped lang="stylus">
	.main
		display: flex
		flex-direction: column
		position:absolute
		left:0
		right: 0
		top: 0
		bottom: 0
		.scroller
			flex: 1
			overflow: hidden
		
</style>