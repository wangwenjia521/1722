<template>
	<div class="main">
		<city-header></city-header>
		<city-search :list="list"></city-search>
		<city-list :list ="list" :hotcity="hotcity" class="list" ref="list"></city-list>
		<side-bar :list="list"  @letterChange="handleLetterChange"></side-bar>
	</div>
</template>

<script>
	import axios from 'axios'
	import CityHeader from './header'
	import CitySearch from  './search'
	import CityList from './list'
	import SideBar from './sidebar'
	export default {
		name: 'city',
		components: {
			CityHeader,
			CitySearch,
			CityList,
			SideBar
		},
		data () {
			return {
				list: {},
				hotcity: []
			}
		},
		methods: {
			getListInfo () {
				axios.get('/api/city.json').then(this.handleGetListSucc.bind(this))
				.catch(this.handleGetListErr.bind(this))
			},
			handleGetListSucc (res) {
				res && (res = res.data)
				if(res && res.data) {
					res.data.list && (this.list = res.data.list)
					res.data.hotcity && (this.hotcity = res.data.hotcity)
				}
			},
			handleGetListErr (err) {
				console.log(err)
			},
			handleLetterChange (item) {
				this.$refs.list.scrollToIndex(item)
			}
		},
		created() {
			this.getListInfo()
		}
	}
</script>

<style scoped lang="stylus">
	.main
		position: absolute
		left: 0
		right: 0
		top: 0
		bottom: 0
		display:  flex
		flex-direction: column
		.list
			flex: 1
</style>