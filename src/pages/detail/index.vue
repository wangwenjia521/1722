<template>
    <div>
      <banner></banner>
    </div>
</template>
<script>
import Banner from './banner'
export default {
    name: 'detail',
    components: {
        Banner
    },
    created () {
        console.log(this.$route.params.sightId)
       
    },
    methods: {
        getDetailInfo() {
           
        }
    },
    watch: {
       '$route' () {
           if(this.$route.params.sightId) {
               this.getDetailInfo()
           }
            
       }
    }

}
</script>
<style lang="stylus">

</style>