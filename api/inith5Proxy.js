const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (req, res) => {
  let target = ''
  // 代理目标地址
  // 这里使用 backend 主要用于区分 vercel serverless 的 api 路径
  if (req.url.startsWith('/api/h5')) {
    target = 'http://36.7.140.35:18080/'
  }
  // 创建代理对象并转发请求
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      '^/api/': '/'
    }
  })(req, res)
}