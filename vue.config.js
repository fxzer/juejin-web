module.exports  = {
  publicPath: process.env.BASE_URL,
  outputDir: process.env.OUTPUT_DIR,
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