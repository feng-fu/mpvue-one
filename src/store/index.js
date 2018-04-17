import Vue from 'vue'
import Vuex from 'vuex'

import home from './modules/home'
import movie from './modules/movie'
// import read from './modules/read'
// import music from './modules/music'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    home: {
      namespaced: true,
      ...home
    },
    movie: {
      namespaced: true,
      ...movie
    }
  }
  // movie,
  // read,
  // music
})

export default store
