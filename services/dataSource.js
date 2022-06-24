import { apiBase, apiRedshift } from './instance';

const loginFacebook = (token) => apiBase({
  method: 'post',
  url: `/api/facebook-connection/save-token/?accessToken=${token}`,
});

const loginGoogle = (code) => apiBase({
  method: 'post',
  url: `/api/google-analytics/save-ga-token?code=${code}`,
});

const databaseConnection = (database) => apiBase({
  method: 'post',
  url: '/api/database-connection',
  data: database,
});

const getCustomerTemplate = (file) => apiRedshift({
  credentials: 'same-origin',
  method: 'get',
  url: `/api/csv/customer/template/${file}`,
  responseType: 'blob',
});

const dataSourceService = {
  loginFacebook,
  loginGoogle,
  databaseConnection,
  getCustomerTemplate,
};

export default dataSourceService;
