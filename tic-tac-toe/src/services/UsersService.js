import api from '~config/api';

export default {
  getUserData: (username, password) => api.get('/users', { username, password })
};
