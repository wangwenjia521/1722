<template>
	<div class="header">
		<div class="back iconfont">&#xe618;</div>
		<div class="search">
			<div class="search-content">
				<span class="iconfont serch-icon">
					&#xe613;
				</span>
				请输入城市/景点/游玩主题
			</div>
		</div>
		<div class="city "><!--{{this.$store.state.city}} --> {{city}}
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		name: 'index-header',
		computed: {
			...mapState (['city'])
		}	
	}
</script>

<style scoped lang="stylus">
 @import '../../assets/styles/common/varibles.styl'
	.header
		display: flex
		flex-wrap: nowrap
		height: .88rem
		background: $bgColor
		.back
			width: .8rem
			line-height: .88rem
			text-align: center
			font-size: .44rem
			color: #fff
			font-weight:bold
		.search
			flex:1
			color: #777
			.search-content
				width: 100%
				height: 0.6rem
				line-height: 0.6rem
				margin-top: 0.14rem
				background: #fff
				border-radius: 0.1rem
				text-indent: 0.1rem
				overflow: hidden
				white-space: nowrap;
				text-overflow: ellipsis;
				.search-icon
					margin-top: .1rem
		.city
			max-width: 1.6rem
			position: relative
			line-height: .88rem
			padding: 0  0.46rem 0 .22rem
			font-size: .28rem
			color: #fff
			overflow: hidden
			white-space: nowrap
			text-overflow: ellipsis
			text
			&::before
				position: absolute
				right: 0.16rem
				top:0.38rem
				content: '\0020'
				width: 0
				height: 0
				border-left: .12rem solid transparent
				border-right: .12rem solid transparent
				border-top: .12rem solid #fff
</style>