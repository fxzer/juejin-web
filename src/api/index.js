import axios from 'axios'

const request  = axios.create({
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 30000,
})
request.interceptors.request.use((req)=>{
  req.headers['authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjgxZjk4MTVjMzkyNGM5YTI2MjEwM2QiLCJpYXQiOjE2NTI2OTE0OTksImV4cCI6MTY1Mjg2NDI5OX0.mu0HEaVrwJjYnwHXK-DBeteUaNncY_YOaeABPA8pt2Y'
  return req
})

request.interceptors.response.use((res)=>{
  
  return res.data 
})

export default request;