<template>
	<div class="header">
		<div  class="back iconfont" @click="handleBackClick">&#xe618;</div>
		城市选择
	</div>
</template>

<script>
	export default {
		name: 'city-header',
		methods: {
			handleBackClick () {
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped lang="stylus">
 @import '../../assets/styles/common/varibles.styl'
.header
	line-height: 0.88rem
	height: 0.88rem
	background: $bgColor
	text-align: center
	font-size: 0.36rem
	color: #fff
	.back
		position: absolute
		left: 0
		top:0
		width: 0.88rem
		line-height:0.88rem
		font-size: 0.44rem
		font-weight: bold
</style>