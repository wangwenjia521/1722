<template>
<div>
	<div class="search">
		<input  class="search-input" type="text" placeholder="输入城市名或拼音" @input="handleInputChange"/>
	</div>
	<div class="search-list" v-show="showList" ref="list">
		<ul>
			<li class="search-item border-bottom" v-for="(item, index) in filterResult" :key="index">{{item.name}}</li>
		</ul>
	</div>
</div>
</template>
<script>
import BScroll from 'better-scroll'
	export default {
		name: "search",
		props: {
			list: Object
		},
		data () {
			return {
				showList: false,
				filterResult: []
			}
			
		},
		computed: {
			result () {
				const result = []
				for(let i in this.list) {
					this.list[i].forEach((value) => {
						result.push({
							name: value.name,
							spell: value.spell
						})
						
					})
				}
				return result
			}
		},
		watch: {
			filterResult() {
				this.$nextTick(() => {
					this.scroll.refresh()
				})
			}
		},
		methods: {
			handleInputChange (e) {
			const value = e.target.value.toLowerCase()
			if(value) {
				this.showList = true
				this.filterResult = this.result.filter((item) => {
						if(item.name.indexOf(value) > -1 || item.spell.indexOf(value) > -1) {
							return true
						}
					})
			}else {
				this.showList = false
				}
			
			}
		},
		mounted () {
			this.scroll = new BScroll(this.$refs.list)
		}
	}
</script>

<style lang="stylus" scoped>
 @import '../../assets/styles/common/varibles.styl'
.search 
	height: 0.74rem
	background: $bgColor
	padding: 0 0.4rem
	box-sizing:  border-box
	.search-input
		width: 100%
		height: .62rem
		margin-top: .06rem
		text-align:center
		border-radius: 0.1rem
		font-size: .24rem
		padding: 0 .2rem
		color: $fontNormalColor
		box-sizing: border-box
.search-list
	position: absolute
	top: 1.62rem
	left: 0
	right: 0
	bottom: 0
	background: #f5f5f5
	z-index: 2
	overflow: hidden
	.search-item
	  padding-left: .3rem
	  line-height: .66rem
	  background:  #ffffff
	  color:  #333

</style>