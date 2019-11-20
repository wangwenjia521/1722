<template>
    <div class="banner">
        <img src="http://img1.qunarzz.com/sight/p0/201403/20/a9841b0ae15ced352723a91d32ab9e88.jpg_r_800x800_2a8cdb43.jpg" alt="" class="banner-image">
    </div>
</template>
<script>
export default {
    name: 'banner',
    props: {
        bannerImg: String,
        listImg: Array
    }
}
</script>
<style lang="stylus" scoped>
    .banner
        overflow: hidden
        height: 0
        padding-bottom: 55%
        .banner-image
            width: 100%
</style>