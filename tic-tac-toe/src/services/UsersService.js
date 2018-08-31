import api from '~config/api';

// VER QUE VA COMO RUTA
export default {
  getUserData: (username, password) => api.get('/users', { username, password })
};
