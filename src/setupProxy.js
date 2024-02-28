const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://einatzilbermaneditor.co.il/',
      changeOrigin: true,
    })
  );
};