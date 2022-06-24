import { GET_DATA_GENERAL_INFORMATION, GET_DATA_GENARAL_INFORMATION_ERROR } from './constants';

const getDataGeneralInformation = (date) => ({
  type: GET_DATA_GENERAL_INFORMATION,
  date,
});
export const getGeneralInformationError = (error) => ({
  type: GET_DATA_GENARAL_INFORMATION_ERROR,
  payload: error,
});

export default getDataGeneralInformation;
