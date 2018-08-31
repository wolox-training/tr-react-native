import api from '~config/api';

// VER QUE VA COMO RUTA
export default {
  getUserData: (user,password) => api.get('/users', { user,password })
};
