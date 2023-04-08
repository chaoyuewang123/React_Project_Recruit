const {createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
      createProxyMiddleware ('/api1', {
      target: 'http://localhost:4000',
      changeOrigin: true,
      pathRewrite: {'^/api1': ''},
      onProxyReq: function (proxyReq, req, res) {
        proxyReq.setHeader('Access-Control-Allow-Origin', '*');
      }
    }),
    createProxyMiddleware ('/api2', {
      target: 'localhost:4001',
      changeOrigin: true,
      pathRewrite: {'^/api2': ''},
      onProxyReq: function (proxyReq, req, res) {
        proxyReq.setHeader('Access-Control-Allow-Origin', '*');
      }
    }),
    
  )

};