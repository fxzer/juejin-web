import axios from 'axios'

const request  = axios.create({
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 30000,
})
request.interceptors.request.use((req)=>{
  let token = localStorage.getItem('token')
  if(token){
    req.headers['authorization'] = 'Bearer '+ token 
  }
  return req
})

request.interceptors.response.use((res)=>{
  return res.data 
})

export default request;