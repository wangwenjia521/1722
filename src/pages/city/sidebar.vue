<template>
    <div class="sidebar">
        <div class="sidebar-list" ref="list">
            <div class="sidebar-item"
            v-for="(item, index) in alphabet" :key="index" 
            @touchstart="handleTouchStart(item)"
            @touchmove="handleTouchMove">
            {{item}}
        </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'side-bar',
    props: {
        list: Object
    },
    computed: {
        //字母表
        alphabet () {
            const arr = []
            for(let i in this.list) {
                arr.push(i)
            }
            return arr
        },
        areaTop () {
            return this.$refs.list.offsetTop + 81
        }
    },
    methods: {
        //两个兄弟组件之间传值，用发布订阅
        handleTouchStart (item) {
            this.$emit('letterChange', item)
        },
        handleTouchMove (e) {
            const index = Math.floor((e.touches[0].clientY -this.areaTop) / 20)
            this.$emit('letterChange',this.alphabet[index])
        }
    }

}
</script>
<style lang="stylus" scoped>
 @import '../../assets/styles/common/varibles.styl'
.sidebar
    position: absolute 
    right: 0
    top: 1.62rem
    bottom: 0
    width: .4rem
    .sidebar-list
        width: 100%
        position: absolute 
        top: 30%
        background: red
        .sidebar-item
            width: 100%
            text-align: center
            line-height: .4rem
            color: #666

</style>