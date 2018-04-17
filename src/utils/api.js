import request from './request'

const baseURL = `http://v3.wufazhuce.com:8000`

const api = {
  // picture
  getNewIds: () => request.get('/api/hp/idlist/0?version=3.5.0&platform=android', null, { baseURL }),
  getHomeData: (id) => request.get(`/api/hp/detail/${id}?version=3.5.0&platform=android`, null, { baseURL }),
  // read
  getReadList: () => request.get('/api/reading/index/?version=3.5.0&platform=android', null, { baseURL }),
  getReadDetail: (id) => request.get(`/api/essay/${id}?version=3.5.0&platform=android`, null, { baseURL }),
  getReadComment: (id) => request.get(`/api/comment/praiseandtime/essay/${id}/0?version=3.5.0&platform=android`, null, { baseURL }),
  // music
  getMusicList: () => request.get('/api/music/idlist/0?version=3.5.0&platform=android', null, { baseURL }),
  getMusicDetail: (id) => request.get(`/api/music/detail/${id}?version=3.5.0&platform=android`, null, { baseURL }),
  // movie
  getMovieList: () => request.get('/api/movie/list/0?version=3.5.0&platform=android', null, { baseURL }),
  getMovieDetail: (id) => request.get(`/api/movie/${id}/story/1/0?version=3.5.0&platform=android`, null, { baseURL })
}

export default api
