import request from './index'
export const getUserInfo = (id) => {
   return request.get(`/juejinapi/profile/${id}`)
}
export const followUser = (id) => {
   return request.get(`/juejinapi/user`)
}
export const login = (user) => {
   return request.post(`/juejinapi/user/login`,{user})
}
export const register = (user) => {
   return request.post(`/juejinapi/user`,{user})
}
export const updateUser = (user) => {
   return request.put(`/juejinapi/user`,{user})
}