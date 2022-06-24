import { apiBase } from './instance';

const connect = (domain) => apiBase({
  method: 'post',
  url: '/api/javascript-connection',
  data: domain,
});

const jsconnection = {
  connect,
};

export default jsconnection;
