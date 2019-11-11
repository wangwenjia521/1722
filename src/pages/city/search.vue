<template>
<div class="search">
	<input  class="search-input" type="text" placeholder="输入城市名或拼音" />
</div>
</template>
<script>
	export default {
		name: "search"
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
</style>