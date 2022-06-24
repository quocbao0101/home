// import { apiBase } from './instance';

function getDataFBADS() {
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
        cpc: 463.513889,
        reach: 4097,
        clicks: 144,
      },
      ads_performance: [
        {
          adSetName: 'New Ad Set 1',
          ctr: 0,
          cpc: 0,
          spend: 3745,
        },
        {
          adSetName: 'Lead Ad Set 1',
          ctr: 3.626943,
          cpc: 1141.714286,
          spend: 23976,
        },
        {
          adSetName: 'messenger ads',
          ctr: 0,
          cpc: 0,
          spend: 2349,
        },
        {
          adSetName: 'engagament campaign',
          ctr: 4.237288,
          cpc: 896.4,
          spend: 4482,
        },
        {
          adSetName: 'reach campaign',
          ctr: 0.184162,
          cpc: 586.666667,
          spend: 1760,
        },
        {
          adSetName: 'Nhóm quảng cáo 1',
          ctr: 7.011796,
          cpc: 246.448598,
          spend: 26370,
        },
      ],
      campaign_performance: [
        {
          campaignName: 'Lead Campaign 2',
          ctr: 0,
          cpc: 0,
          spend: 3745,
          clicks: 0,
        },
        {
          campaignName: 'Lead Campaign 1',
          ctr: 3.626943,
          cpc: 1141.714286,
          spend: 23976,
          clicks: 21,
        },
        {
          campaignName: 'instagram traffic Campaign',
          ctr: 0,
          cpc: 0,
          spend: 2349,
          clicks: 0,
        },
        {
          campaignName: 'instagram engagement  campaign',
          ctr: 4.237288,
          cpc: 896.4,
          spend: 4482,
          clicks: 5,
        },
        {
          campaignName: 'instagram reach campaign',
          ctr: 0.184162,
          cpc: 586.666667,
          spend: 1760,
          clicks: 3,
        },
        {
          campaignName: 'Chiến dịch 1',
          ctr: 7.011796,
          cpc: 246.448598,
          spend: 26370,
          clicks: 107,
        },
      ],
    },
    status: 'OK',
  };
}
function getDataFBPage() {
  //   return apiBase({
  //     url: 'https://www.anapioficeandfire.com/api/books',
  //     method: 'GET',
  //   });
  return {
    message: 'success',
    data: {
      data_fan_page: [
        {
          name: 'page_posts_impressions',
          period: 'day',
          insightsValues: [
            {
              value: 0,
              end_time: '2022-05-20T07:00:00+0000',
            },
          ],
        },
        {
          name: 'page_post_engagements',
          period: 'day',
          insightsValues: [
            {
              value: 0,
              end_time: '2022-05-20T07:00:00+0000',
            },
          ],
        },
        {
          name: 'page_engaged_users',
          period: 'day',
          insightsValues: [
            {
              value: 0,
              end_time: '2022-05-20T07:00:00+0000',
            },
          ],
        },
      ],
      data_fan_page_complementary: [
        {
          name: 'page_actions_post_reactions_total',
          period: 'day',
          insightsValueComplementaries: [
            {
              value: {
                total: 0,
              },
              end_time: '2022-05-20T07:00:00+0000',
            },
          ],
        },
        {
          name: 'page_fans_by_like_source',
          period: 'day',
          insightsValueComplementaries: [
            {
              value: {
                total: 0,
              },
              end_time: '2022-05-20T07:00:00+0000',
            },
          ],
        },
      ],
    },
    status: 'OK',
  };
}
function getDataFBTopPage() {
  //   return apiBase({
  //     url: 'https://www.anapioficeandfire.com/api/books',
  //     method: 'GET',
  //   });
  return {
    message: 'success',
    data: {
      top_page: [
        {
          id: '102619972021007_133553732260964',
          message:
                '"🔜🔜🔜 Set đồ nhẹ nhàng siêu đẹp nhà iem về bến 🍭🍭\n💥 Ăn ảnh ở mọi góc hình\n🌱🌱lên form đẹp lắm bảo sao hot như thế này , chất thì ai cũng ưng ạ\n🌵 Chẳng cần nhiều màu vẫn đẹp quên sầu\n🌴 Phom mặc phát ưng lun vì siu gọn"\n----------------------------------------------\n☎️ 0686868689-0999999999\n🏩Số 68, ngõ 68 Chính Kinh - Thanh Xuân - HN',
          insights: {
            data: [
              {
                name: 'post_engaged_users',
                period: 'lifetime',
                values: [
                  {
                    value: 132,
                  },
                ],
              },
              {
                name: 'post_clicks',
                period: 'lifetime',
                values: [
                  {
                    value: 73,
                  },
                ],
              },
              {
                name: 'post_engaged_fan',
                period: 'lifetime',
                values: [
                  {
                    value: 3,
                  },
                ],
              },
              {
                name: 'post_impressions',
                period: 'lifetime',
                values: [
                  {
                    value: 1702,
                  },
                ],
              },
            ],
          },
          full_picture:
                'https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/230745798_133554092260928_4634841605232801495_n.png?stp=dst-png_p480x480&_nc_cat=111&ccb=1-7&_nc_sid=8024bb&_nc_ohc=kVZ77fMLuUwAX9sD8-o&_nc_ht=scontent.fsgn5-11.fna&edm=AKIiGfEEAAAA&oh=00_AT-hGqkoLq5Q_A6cYL14GZ3v1eN7rgbx_Zje9lS9DaKh_g&oe=629BAECF',
        },
        {
          id: '102619972021007_104530428496628',
          message: 'New Arrival',
          insights: {
            data: [
              {
                name: 'post_engaged_users',
                period: 'lifetime',
                values: [
                  {
                    value: 8,
                  },
                ],
              },
              {
                name: 'post_clicks',
                period: 'lifetime',
                values: [
                  {
                    value: 6,
                  },
                ],
              },
              {
                name: 'post_engaged_fan',
                period: 'lifetime',
                values: [
                  {
                    value: 2,
                  },
                ],
              },
              {
                name: 'post_impressions',
                period: 'lifetime',
                values: [
                  {
                    value: 77,
                  },
                ],
              },
            ],
          },
          full_picture: 'No Picture',
        },
        {
          id: '102619972021007_131936809089323',
          message: 'No Message',
          insights: {
            data: [
              {
                name: 'post_engaged_users',
                period: 'lifetime',
                values: [
                  {
                    value: 2,
                  },
                ],
              },
              {
                name: 'post_clicks',
                period: 'lifetime',
                values: [
                  {
                    value: 1,
                  },
                ],
              },
              {
                name: 'post_engaged_fan',
                period: 'lifetime',
                values: [
                  {
                    value: 2,
                  },
                ],
              },
              {
                name: 'post_impressions',
                period: 'lifetime',
                values: [
                  {
                    value: 21,
                  },
                ],
              },
            ],
          },
          full_picture:
                'https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/224399589_131936772422660_7000241545307716402_n.jpg?stp=dst-jpg_s720x720&_nc_cat=109&ccb=1-7&_nc_sid=dd9801&_nc_ohc=XQtIn8GzQy8AX9HLBmj&_nc_ht=scontent.fsgn5-8.fna&edm=AKIiGfEEAAAA&oh=00_AT9wUdES6bDypQykFdQL6OHK_aXsZejTAB1BzHlAP8BWYw&oe=629C5AF2',
        },
        {
          id: '102619972021007_104484951834509',
          message:
                '⚡ CÙNG KAPPA TỰ TIN ĐÓN HÈ - SĂN DEAL HOT CHỈ TỪ 490K - ĐỘC QUYỀN ONLINE >>> bit.ly/3yjqPog',
          insights: {
            data: [
              {
                name: 'post_engaged_users',
                period: 'lifetime',
                values: [
                  {
                    value: 2,
                  },
                ],
              },
              {
                name: 'post_clicks',
                period: 'lifetime',
                values: [
                  {
                    value: 0,
                  },
                ],
              },
              {
                name: 'post_engaged_fan',
                period: 'lifetime',
                values: [
                  {
                    value: 1,
                  },
                ],
              },
              {
                name: 'post_impressions',
                period: 'lifetime',
                values: [
                  {
                    value: 27,
                  },
                ],
              },
            ],
          },
          full_picture:
                'https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.6435-9/186510005_2669047136727206_5636417596250831183_n.jpg?stp=dst-jpg_s720x720&_nc_cat=100&ccb=1-7&_nc_sid=8024bb&_nc_ohc=JwgAtYPjE6cAX9nU03J&_nc_ht=scontent.fsgn5-5.fna&edm=AKIiGfEEAAAA&oh=00_AT_lKtSYlIhNm-MaCcdgLi8p-SSyHYm-4qEc8Ri9uZgu8Q&oe=62BCD751',
        },
        {
          id: '102619972021007_133655615584109',
          message: 'No Message',
          insights: {
            data: [
              {
                name: 'post_engaged_users',
                period: 'lifetime',
                values: [
                  {
                    value: 1,
                  },
                ],
              },
              {
                name: 'post_clicks',
                period: 'lifetime',
                values: [
                  {
                    value: 0,
                  },
                ],
              },
              {
                name: 'post_engaged_fan',
                period: 'lifetime',
                values: [
                  {
                    value: 0,
                  },
                ],
              },
              {
                name: 'post_impressions',
                period: 'lifetime',
                values: [
                  {
                    value: 43,
                  },
                ],
              },
            ],
          },
          full_picture:
                'https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/229360148_133655635584107_8027456479442668073_n.jpg?stp=dst-jpg_p720x720&_nc_cat=100&ccb=1-7&_nc_sid=e007fa&_nc_ohc=wKk8wDasyG8AX_2Q3TV&_nc_ht=scontent.fsgn5-5.fna&edm=AKIiGfEEAAAA&oh=00_AT9qBM7nyNYGutCskv9FjyVfdsboSitHkZbHlUifJLIgQw&oe=629BC29E',
        },
        {
          id: '102619972021007_133596828923321',
          message:
                'Set áo đại bàng, còn 100 cái cuối cùng\nSale 90%\n40k/ cái, freeship toàn quốc',
          insights: {
            data: [
              {
                name: 'post_engaged_users',
                period: 'lifetime',
                values: [
                  {
                    value: 1,
                  },
                ],
              },
              {
                name: 'post_clicks',
                period: 'lifetime',
                values: [
                  {
                    value: 1,
                  },
                ],
              },
              {
                name: 'post_engaged_fan',
                period: 'lifetime',
                values: [
                  {
                    value: 1,
                  },
                ],
              },
              {
                name: 'post_impressions',
                period: 'lifetime',
                values: [
                  {
                    value: 21,
                  },
                ],
              },
            ],
          },
          full_picture:
                'https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/205464448_133596755589995_6004197796647098670_n.jpg?stp=dst-jpg_p720x720&_nc_cat=111&ccb=1-7&_nc_sid=9e2e56&_nc_ohc=cmg_lavos7kAX9ITrwg&_nc_ht=scontent.fsgn5-11.fna&edm=AKIiGfEEAAAA&oh=00_AT99pOZd6iPkBKtwAv8lc-JysW2riG_uteoA7u2Ayvvn5Q&oe=629B4B03',
        },
      ],
    },
    status: 'OK',
  };
}

const dashboardService = {
  getDataFBADS,
  getDataFBPage,
  getDataFBTopPage,
};

export default dashboardService;
