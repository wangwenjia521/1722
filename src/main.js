// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Fastclik from 'fastclick'
import store from '@/store/'
//移动端1像素边框  和set stylus 公用的文件
import '@/assets/styles/base/reset.css'
import '@/assets/styles/base/border.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
//移动端300s延时
import '@/assets/styles/base/iconfont/iconfont.css'
Fastclik.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
