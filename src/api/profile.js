import request from './index'
 
export const followUser = (id) => {
   return request.post(`/juejinapi/profile/${id}/follow`)
}