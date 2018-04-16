import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/one/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fafafa',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#130f13',
      selectedColor: '#0f0f0f',
      list: [
        {
          pagePath: 'pages/one/main',
          text: 'ONE',
          iconPath: 'static/icon/o.png',
          selectedIconPath: 'static/icon/o-active.png'
        },
        {
          pagePath: 'pages/all/main',
          text: 'ALL',
          iconPath: 'static/icon/a.png',
          selectedIconPath: 'static/icon/a-active.png'
        },
        {
          pagePath: 'pages/me/main',
          text: 'ME',
          iconPath: 'static/icon/me.png',
          selectedIconPath: 'static/icon/me-active.png'
        }
      ]
    }
  }
}
