import Vue from 'vue'
import App from './question'
import store from '@/store/index'
const app = new Vue({
  store,
  ...App
})
app.$mount()
