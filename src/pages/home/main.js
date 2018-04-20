import Vue from 'vue'
import App from './index'
import store from '@/store/index'
const app = new Vue({
  store,
  ...App
})
app.$mount()

export default {
  config: {
    navigationBarTitleText: '首页'
  }
}
