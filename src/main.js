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
    pages: ['^pages/movie/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fafafa',
      navigationBarTitleText: '一个',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#130f13',
      selectedColor: '#0f0f0f',
      list: [
        {
          pagePath: 'pages/home/main',
          text: 'ONE',
          iconPath: 'static/icon/home.png',
          selectedIconPath: 'static/icon/home-active.png'
        },
        {
          pagePath: 'pages/read/main',
          text: 'READ',
          iconPath: 'static/icon/read.png',
          selectedIconPath: 'static/icon/read-active.png'
        },
        {
          pagePath: 'pages/movie/main',
          text: 'MOVIE',
          iconPath: 'static/icon/movie.png',
          selectedIconPath: 'static/icon/movie-active.png'
        },
        {
          pagePath: 'pages/music/main',
          text: 'MUSIC',
          iconPath: 'static/icon/music.png',
          selectedIconPath: 'static/icon/music-active.png'
        }
      ]
    }
  }
}
