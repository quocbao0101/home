// import { apiBase } from './instance';

function getDataReportOverview() {
  //   return apiBase({
  //     url: 'https://www.anapioficeandfire.com/api/books',
  //     method: 'GET',
  //   });
  return {
    message: 'success',
    data: {
      session: {
        Session: 21,
      },
      totalVisitor: {
        TotalVisitor: 12,
      },
      newUser: {
        NewUsers: 8,
      },
    },
    status: 'OK',
  };
}

function getDataReportOverviewFB() {
  //   return apiBase({
  //     url: 'https://www.anapioficeandfire.com/api/books',
  //     method: 'GET',
  //   });
  return {
    message: 'success',
    data: {
      ads_account_insight: {
        impressions: 4274,
        spend: 66746,
        ctr: 3.369209,
        clicks: 144,
      },
    },
    status: 'OK',
  };
}
function getDataReportOverviewIns() {
  //   return apiBase({
  //     url: 'https://www.anapioficeandfire.com/api/books',
  //     method: 'GET',
  //   });
  return {
    message: 'success',
    data: {
      id: 17841448108705430,
      instaInfoMap: {
        impressions_day: 0,
        reach_day: 0,
        follower: 2,
      },
    },
    status: 'OK',
  };
}
const dashboardService = {
  getDataReportOverview,
  getDataReportOverviewFB,
  getDataReportOverviewIns,
};
export default dashboardService;
