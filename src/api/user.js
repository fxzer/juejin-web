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
export const register = (user) => {
   return request.post(`/api/user`,{user})
}
export const updateUser = (user) => {
   return request.put(`/api/user`,{user})
}