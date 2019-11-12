<template>
<div ref="wrapper">
	<div class="list">
		<!-- 您的位置 -->
		<div class="area">
			<div class="title border-topbottom">您的位置</div>
			<div class="content">
				<div class="button ">
					<div class="button-text button-active" @click="handleCityClick(city)">
						{{city || '上海'}}
					</div>
				</div>
			</div>
		</div>
		 <!-- 热门城市  -->
		<div class="area">
			<div class="title border-topbottom">热门城市</div>
			<div class="content">
				<div class="button"  v-for="item in hotcity" :key="item.id">
					<div class="button-text" @click="handleCityClick(item.city)" :class="{'button-active': item.city === city}" >
						{{item.city}}
					</div>
				</div>
			</div>
		</div>
		<!-- 城市列表 -->
		<div class="area" v-for="(value, key) in list" :key="key" :ref="key" >
			<div class="title border-topbottom">{{key}}</div>
			<div class="content" >
				<div class="content-item border-bottom" v-for="item in value" :key="item.id" >
					<div class="button-text"  @click="handleCityClick(item.name)">
						{{item.name}}
					</div>
				</div>
			</div>
		</div>
	</div>		
</div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import BScroll from 'better-scroll'
	export default {
		name: 'city-list',
		props: {
			list: Object,
			hotcity: Array
		},
	// 	watch: {
	// 		list () {
	// 			console.log(this.list)
	// 		}
    // }, 
    methods: {
      handleCityClick (city) {
        this.changeCity(city)
        this.$router.push('/')
      },
	  ...mapMutations(['changeCity']),
	  scrollToIndex(item) {
		this.scroll.scrollToElement(this.$refs[item][0])
	  }
    },
		computed: {
			...mapState(['city'])
		},
		mounted () {
			this.scroll = new BScroll(this.$refs.wrapper)
		},
		//缓存 的时候better-scroll不能很好地滑动，要重新激活一下 beter-scroll的坑
		activated (){
			this.scroll && this.scroll.refresh()
		}
	}
</script>

<style lang="stylus" scoped>
 @import '../../assets/styles/common/varibles.styl'
.list
  overflow: hidden
	.area
		.title
			line-height: .54rem
			padding-left: .3rem
			background: #eee
			color: #616161
			font-size: .26rem
			&::before, &::after
				border-color: #616161
		.content
			overflow: hidden
			padding: 0 .4rem 0 .2rem
			.button
				float: left
				width: 33.33%
				.button-text
					line-height: 0.6rem
					margin: .2rem
					border: .02rem solid #999
					text-align: center
					border-radius: .06rem
				.button-active
					color: $bgColor
					border-color: $bgColor
			.content-item
				line-height: .6rem
		
</style>