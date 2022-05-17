module.exports  = {
  devServer:{
    proxy:{
      '/api':{
        target:'http://124.221.221.79:5000',
        ws: false,
        changeOrigin: true
      }
    }
  }
}