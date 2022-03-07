module.exports = [
  {
    page: 'index',
    chunks: ['detail'],
    template: 'src/ejs/index.ejs',
    meta: {
      description: 'aaa'
    }
  },
  {
    page: 'detail',
    chunks: [],
    template: 'src/ejs/detail.ejs',
    meta: {}
  }
]