import { apiBase } from './instance';

function getNews() {
  return apiBase({
    url: 'https://www.anapioficeandfire.com/api/books',
    method: 'GET',
  });
}

const dashboardService = {
  getNews,
};

export default dashboardService;
