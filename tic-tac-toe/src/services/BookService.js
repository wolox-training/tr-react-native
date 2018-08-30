import api from '~src/api'

export default {
  getBookDetail: id => api.get('/books', { id })
};
