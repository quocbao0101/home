import { apiRedshift } from './instance';

function getDataGeneralInformation(data) {
  return apiRedshift({
    url: '/t-insight/general/information/report-overview',
    method: 'POST',
    data,
  });
}
function getDataGIAOV(data) {
  return apiRedshift({
    url: '/t-insight/general/information/customer-average-order-value',
    method: 'POST',
    data,
  });
}
function getDataGIRate(data) {
  return apiRedshift({
    url: '/t-insight/general/information/growth-rate',
    method: 'POST',
    data,
  });
}
function getGICusByChannel(data) {
  return apiRedshift({
    url: '/t-insight/general/information/customer-by-channel',
    method: 'POST',
    data,
  });
}
function getDataGIRateByRegion(data) {
  return apiRedshift({
    url: '/t-insight/general/information/revenue-rate-by-begion-rate',
    method: 'POST',
    data,
  });
}

const dashboardService = {
  getDataGeneralInformation,
  getDataGIAOV,
  getDataGIRate,
  getGICusByChannel,
  getDataGIRateByRegion,
};

export default dashboardService;
