import request from './request'

const baseURL = `http://v3.wufazhuce.com:8000`

const api = {
  getNewIds: () => request.get('/api/onelist/idlist/?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android', null, {
    baseURL
  }),
  getOneList: (id) => request.get(`/api/onelist/${id}/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android`, null, {
    baseURL
  }),
  getOneStoryDtl: (id) => request.get(`/api/essay/${id}?channel=wdj&source=summary&source_id=9261&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android`, null, {
    baseURL
  })
}

export default api
