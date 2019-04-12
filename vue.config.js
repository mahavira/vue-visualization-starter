module.exports = {
  publicPath: '',
  devServer: {
    proxy: 'http://221.2.140.133:8601/',
  },
  pages: {
    index: {
      entry: 'core/index.js',
    }
  }
};
