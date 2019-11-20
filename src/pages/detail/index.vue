<template>
    <div>
      <banner :bannerImg="bannerImg" :ListImg="ListImg"></banner>
    </div>
</template>
<script>
import Banner from './banner'
import axios from 'axios'
export default {
    name: 'detail',
    props: {
        sightId: [Number, String]
    },
    data (){
        return {
            bannerImg: '',
            ListImg: ''
        }
    },
    components: {
        Banner
    },
    created () {
        // console.log(this.$route.params.sightId)
        this.getDetailInfo()
       
    },
    methods: {
        getDetailInfo() {
           axios.get('/api/detail.json' , {
               params:{
                    id: this.sightId
               }
              
           } ).then(this.handleGetDetailSucc.bind(this))
           .catch(this.handleGetDetailErr.bind(this))
        },
        handleGetDetailSucc (res) {
            res && (res = res.data)
            if(res && res.ret && res.data) {
                this.bannerImg = res.data.bannerImg
                this.imgList = res.data.imgList
            }else {
                this.handleGetDetailErr()
            }
            
        },
        handleGetDetailErr() {
            console.log('error')
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