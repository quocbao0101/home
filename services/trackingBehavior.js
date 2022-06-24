// import { apiBase } from './instance';
function getDataTrackingBehavior() {
  //   return apiBase({
  //     url: 'https://www.anapioficeandfire.com/api/books',
  //     method: 'GET',
  //   });
  return {
    message: 'success',
    data: {
      purchaseClick: {
        PurchaseClick: 4,
      },
      cancelRate: {
        CancelRate: 4.697986577181208,
      },
      totalvisited: {
        TotalVisitedOnSite: 447,
      },
      timeOnSite: {
        TimeOnSite: 17612,
      },
      campaign: {
        ClickCampaign: 0,
      },
      visitorProducts: [],
      eventStatistics: {
        pageView: 447,
        addToCart: 0,
        checkout: 0,
        productView: 0,
        firstPurchase: 4,
      },
      addToCarts: {
        totalOrder: 31.38061,
        completedSuccessfully: 0,
        cancel: 4.911717,
      },
    },
    status: 'OK',
  };
}

const dashboardService = {
  getDataTrackingBehavior,
};

export default dashboardService;
