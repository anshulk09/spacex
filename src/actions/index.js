import { GET_DATA, GET_FILTERED_DATA } from './types';
import spaceXAPI from '../api/spaceXAPI';

export const getData = () => async dispatch => {
  const response = await spaceXAPI.get(
    '/v3/launches?limit=50&launch_success=&land_success=&launch_year='
  );
  dispatch({
    type: GET_DATA,
    payload: response.data
  });
};

export const getFilteredData = ({
  launch_success,
  land_success,
  launch_year
}) => async dispatch => {
  const response = await spaceXAPI.get(
    `/v3/launches?limit=50&launch_success=${launch_success}&land_success=${land_success}&launch_year=${launch_year}`
  );
  dispatch({
    type: GET_FILTERED_DATA,
    payload: response.data
  });
};
