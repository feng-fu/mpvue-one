import request from './request'

const baseURL = `https://petrify.cc`

const api = {
  // picture
  getNewIds: () => request.get(`/v1/one?${encodeURI('url=/api/hp/idlist/0?version=3.5.0&platform=android')}`, null, { baseURL }),
  getHomeData: (id) => request.get(`/v1/one?${encodeURI('url=/api/hp/detail/' + id + '?version=3.5.0&platform=android')}`, null, { baseURL }),
  // read
  getReadList: () => request.get(`/v1/one?${encodeURI('url=/api/reading/index/?version=3.5.0&platform=android')}`, null, { baseURL }),
  getReadDetail: (id) => request.get(`/v1/one?${encodeURI('url=/api/essay/' + id + '?version=3.5.0&platform=android')}`, null, { baseURL }),
  getReadComment: (id) => request.get(`/v1/one?${encodeURI('url=/api/comment/praiseandtime/essay/' + id + '/0?version=3.5.0&platform=android')}`, null, { baseURL }),
  // music
  getMusicList: () => request.get(`/v1/one?${encodeURI('url=/api/music/idlist/0?version=3.5.0&platform=android')}`, null, { baseURL }),
  getMusicDetail: (id) => request.get(`/v1/one?${encodeURI('url=/api/music/detail/' + id + '?version=3.5.0&platform=android')}`, null, { baseURL }),
  // movie
  getMovieList: () => request.get(`/v1/one?${encodeURI('url=/api/movie/list/0?version=3.5.0&platform=android')}`, null, { baseURL }),
  getMovieDetail: (id) => request.get(`/v1/one?${encodeURI('url=/api/movie/' + id + '/story/1/0?version=3.5.0&platform=android')}`, null, { baseURL })
}

export default api
