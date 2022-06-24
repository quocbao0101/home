import { GET_DATA_TRACKING_BEHAVIOR, GET_DATA_TRACKING_BEHAVIOR_ERROR } from './constants';

const getDataTrackingBehavior = () => ({
  type: GET_DATA_TRACKING_BEHAVIOR,
});
export const getTrackingBehaviorError = (error) => ({
  type: GET_DATA_TRACKING_BEHAVIOR_ERROR,
  payload: error,
});

export default getDataTrackingBehavior;
