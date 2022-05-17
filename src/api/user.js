import request from './index'
export const getUserInfo = (id) => {
   return request.get(`/api/profile/${id}`)
}
export const followUser = (id) => {
   return request.get(`/api/user`)
}
export const login = (user) => {
   return request.post(`/api/user/login`,{user})
}