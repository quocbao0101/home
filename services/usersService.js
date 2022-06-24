import { apiBase } from './instance';

const getallUsers = (userData) => apiBase({
  method: 'post',
  url: '/api/users/pagination',
  userData,
});

const adduser = (userData) => apiBase({
  method: 'post',
  url: 'https://621f1e0d311a70591400da61.mockapi.io/users',
  data: userData,
});
const deleteuser = (id) => apiBase({
  method: 'DELETE',
  url: `https://621f1e0d311a70591400da61.mockapi.io/users/${id}`,
});
const getuser = (id) => apiBase({
  method: 'GET',
  url: `https://621f1e0d311a70591400da61.mockapi.io/users/${id}`,
});
const updateuser = (id, userData) => apiBase({
  method: 'PUT',
  url: `https://621f1e0d311a70591400da61.mockapi.io/users/${id}`,
  data: userData,
});
const usersService = {
  getallUsers,
  adduser,
  deleteuser,
  getuser,
  updateuser,
};

export default usersService;
