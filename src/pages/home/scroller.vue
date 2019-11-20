<template>
<div ref="scroller">
  <div class="content">
  	<transition name="fade">
  		<div v-show="isLoading" class="loading">正在加载</div>
  	</transition>
    <div>
		<router-link  v-for="item in lists" :key="item.id"  :to="'/detail/'+item.id" class="item" tag="div">
			<img v-lazy="item.imgUrl" class="item-img"/>
			<div class="item-content">
				<p class="item-title">{{item.title}}</p>
				<p class="item-desc">{{item.desc}}</p>
				<p class="item-price">
					<span class="price-tag">&yen;</span>
					{{item.price}}
					<span class="price-start">起</span>
				</p>
			</div>
		</router-link>
    </div>
  </div>
</div>
</template>

<script>
	import axios from 'axios'
	import { mapState } from 'vuex'
	import BScroll from 'better-scroll'
	export default {
		name: 'scroller',
		props: {
			sights: Array
		},
		data (){
			return {
				isLoading: false,
				isFeching: false,
				moreSights: [],
				pageNum: 1
			}
		},
		watch:{
			lists () {
				this.$nextTick(() => {
					this.scroller.refresh()
				})			
			}
		},
		computed:{
				...mapState(['city']),
			lists () {
				return this.sights.concat(this.moreSights)

			}
		},
		methods: {
				createScroller () {
					this.scroller = new BScroll(this.$refs.scroller , {
						 probeType: 2
					})
				},
				bindEvents () {
					this.scroller.on('scroll' , this.handleScroll.bind(this))
					this.scroller.on('scrollEnd', this.handleScrollEnd.bind(this))
				},
				handleScroll (e) {
					if(e.y > 40 && !this.isLoading) {
						this.getListInfo()
						this.isLoading = true
					}	
				},
				handleScrollEnd () {
						this.isLoading =  false
				},
				getListInfo () {
					if(!this.isFeching) {
						this.isFeching = true
						axios.get('/api/moreSight.json?city='+ this.city + '&page=' + this.pageNum).then(this.handleGetMoreSightSucc.bind(this))
											.catch(this.handleGetMoreSightErr.bind(this))
					}
					
				},
				handleGetMoreSightSucc(res) {		
					res && (res = res.data)
					if(res.data) {
						if(res.data.list) {
							this.moreSights = this.moreSights.concat(res.data.list)
							this.pageNum += 1
							
						}
						this.isFeching = false
					}else {
							this.handleGetMoreSightErr()
					}
				},
				handleGetMoreSightErr (err) {
					this.isFeching = false
					console.log(err)
				}
				
		},
		mounted () {
			this.createScroller()
			this.bindEvents()	
		}
	}
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/common/varibles.styl'
.loading
	text-align: center
	line-height: .8rem
	color: $lightFontColor
.fade-enter-active, .fade-leave-active 
		transition: opacity .5s
.fade-enter, .fade-leave-to 
		opacity: 0
.item
	display: flex
	padding: 0.24rem
	.item-img
		width: 1.4rem
		height: 1.4rem
		margin-right:0.2rem
	.item-content
		flex: 1
		.item-title
			margin: .4rem 0 .1rem 0
			font-size: .3rem
			color: $fontColor
		.item-desc
			margin-bottom: 0.1rem
			font-size: .28rem
			color: $lightFontColor
		.item-price
			margin-top: .2rem
			font-size: 0.36rem
			color: $enlightFontColor
			.price-tag
				font-size: .24rem		
			.price-start
				font-size: .24rem
				color: $lightFontColor
</style>