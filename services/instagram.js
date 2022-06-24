// import { apiBase } from './instance';

function getInstagramReport() {
  //   return apiBase({
  //     url: 'https://api.countapi.xyz/hit/etechstrainig/count',
  //     method: 'GET',
  //   });
  return {
    data: {
      data: {
        impressions_day: 142,
        follower: 2200,
        follower_count_day: 1,
        reach_day: 124,
        like: 81,
        comment: 50,
        website_clicks_day: 1,
        email_contacts_day: 1,
        get_directions_clicks_day: 1,
        phone_call_clicks_day: 1,
        F: 819,
        M: 234,
        U: 399,
        a_13_17: 88,
        a_18_24: 790,
        other: 574,
      },
    },
  };
}

const instagramService = {
  getInstagramReport,
};
export default instagramService;
