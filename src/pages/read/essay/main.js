import Vue from 'vue'
import App from './essay'
import store from '@/store/index'
const app = new Vue({
  store,
  ...App
})
app.$mount()
