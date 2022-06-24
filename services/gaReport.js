// import { apiBase } from './instance';

function getDataGA() {
//   return apiBase({
//     url: 'https://www.anapioficeandfire.com/api/books',
//     method: 'GET',
//   });
  return {
    message: 'success',
    data: {
      acquisitionPipeChart: {
        social: 1,
        organic: 1,
        paid: 1,
        direct: 0,
        referral: 2,
      },
      performanceSources: [
        {
          sourceMedium: '(direct) / (none)',
          session: '8',
          user: '8',
          newUser: '18',
        },
        {
          sourceMedium: 'analytics_test / referral',
          session: '2',
          user: '0',
          newUser: '3',
        },
      ],
      topPages: [
        {
          pagePath: '/',
          session: '18',
          view: '186',
          user: '6',
        },
        {
          pagePath: '/ao-kdb.html',
          session: '0',
          view: '26',
          user: '0',
        },
        {
          pagePath: '/ao-kdb.html?qty=1',
          session: '0',
          view: '2',
          user: '0',
        },
        {
          pagePath: '/ao-m-ne.html',
          session: '0',
          view: '9',
          user: '0',
        },
        {
          pagePath: '/brand/us',
          session: '1',
          view: '28',
          user: '1',
        },
        {
          pagePath: '/brand/us?product_list_mode=list',
          session: '0',
          view: '4',
          user: '0',
        },
        {
          pagePath: '/checkout/',
          session: '0',
          view: '16',
          user: '0',
        },
        {
          pagePath: '/checkout/cart/',
          session: '0',
          view: '2',
          user: '0',
        },
        {
          pagePath: '/checkout/onepage/success/',
          session: '0',
          view: '8',
          user: '0',
        },
        {
          pagePath: '/clothes',
          session: '0',
          view: '6',
          user: '0',
        },
        {
          pagePath: '/customer/account/',
          session: '0',
          view: '5',
          user: '0',
        },
        {
          pagePath: '/customer/account/create/',
          session: '0',
          view: '11',
          user: '0',
        },
        {
          pagePath: '/customer/account/forgotpassword/',
          session: '0',
          view: '2',
          user: '0',
        },
        {
          pagePath: '/customer/account/index/',
          session: '0',
          view: '2',
          user: '0',
        },
        {
          pagePath: '/customer/account/login/referer/aHR0cDovLzU0LjkxLjExNy44OC93aXNobGlzdC9pbmRleC9hZGQv/',
          session: '0',
          view: '1',
          user: '0',
        },
        {
          pagePath: '/customer/account/login/referer/aHR0cDovLzU0LjkxLjExNy44OC9jaGVja291dC9jYXJ0L2luZGV4Lw,,/',
          session: '0',
          view: '2',
          user: '0',
        },
        {
          pagePath: '/customer/account/login/referer/aHR0cDovLzU0LjkxLjExNy44OC9jdXN0b21lci9hY2NvdW50L2luZGV4Lw,,/',
          session: '0',
          view: '2',
          user: '0',
        },
        {
          pagePath: '/customer/account/login/referer/aHR0cDovLzU0LjkxLjExNy44OC9tdWx0Lmh0bWw,/',
          session: '0',
          view: '2',
          user: '0',
        },
        {
          pagePath: '/customer/account/logoutSuccess/',
          session: '0',
          view: '2',
          user: '0',
        },
        {
          pagePath: '/giay-nam.html',
          session: '0',
          view: '2',
          user: '0',
        },
        {
          pagePath: '/magetop.html',
          session: '0',
          view: '38',
          user: '0',
        },
        {
          pagePath: '/mult.html',
          session: '2',
          view: '33',
          user: '1',
        },
        {
          pagePath: '/qu-n-th-d-c.html',
          session: '0',
          view: '7',
          user: '0',
        },
        {
          pagePath: '/sales/order/history/',
          session: '0',
          view: '4',
          user: '0',
        },
        {
          pagePath: '/san-pham.html',
          session: '0',
          view: '32',
          user: '0',
        },
        {
          pagePath: '/shopbybrand',
          session: '0',
          view: '6',
          user: '0',
        },
        {
          pagePath: '/shopbybrands',
          session: '0',
          view: '2',
          user: '0',
        },
        {
          pagePath: '/thoi-trang.html',
          session: '0',
          view: '5',
          user: '0',
        },
        {
          pagePath: '/wishlist/index/index/wishlist_id/14/',
          session: '0',
          view: '2',
          user: '0',
        },
      ],
      products: [
        {
          productName: 'Quần thể dục',
          addToCart: 1,
          productItem: 7.913127,
        },
        {
          productName: 'mũ lưỡi trai',
          addToCart: 1,
          productItem: 3.956563,
        },
        {
          productName: 'áo khoác đại bàng',
          addToCart: 2,
          productItem: 7.777178,
        },
      ],
      session: {
        Session: 21,
      },
      regionPipeChart: {
        Vietnam: 8,
      },
      totalTime: {
        TotalTime: 17612.0,
      },
      totalVisitor: {
        TotalVisitor: 12,
      },
      newUser: {
        NewUsers: 8,
      },
      returningUser: {
        ReturningUsers: 12,
      },
      bounceRate: {
        BounceRate: 14.285714285714285,
      },
      rate: {
        ExitRate: 4.697986577181208,
      },
      viewSession: {
        ViewPerSession: 21.285714285714285,
      },
    },
    status: 'OK',
  };
}

const dashboardService = {
  getDataGA,
};

export default dashboardService;
