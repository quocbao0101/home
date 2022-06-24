import { apiBase } from './instance';

function getDataSourceConnection(data) {
  return apiBase({
    url: 'api/source-connection',
    method: 'POST',
    data,
  });
}

function getDataFilterConnector(data) {
  return apiBase({
    url: 'api/source-connection/connector',
    method: 'GET',
    data,
  });
}
function getDataFilterStatus(data) {
  return apiBase({
    url: 'api/source-connection/status',
    method: 'GET',
    data,
  });
}

function getDataSourceConnectionDelete(data) {
  return apiBase({
    url: 'api/source-connection/delete',
    method: 'DELETE',
    data,
  });
}
const dashboardService = {
  getDataSourceConnection,
  getDataFilterConnector,
  getDataFilterStatus,
  getDataSourceConnectionDelete,
};

export default dashboardService;
