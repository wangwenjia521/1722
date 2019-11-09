<template>
	<div class="list">
		list
	</div>
</template>

<script>
	export default {
		name: 'city-list',
		props: {
			list: Object,
			hotcity: Array
		},
		watch: {
			list () {
				console.log(this.list)
			}
		}
	}
</script>

<style lang="stylus" scoped>
.list
	flex: 1
</style>