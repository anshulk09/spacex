import { combineReducers } from 'redux';
import { GET_DATA, GET_FILTERED_DATA } from '../actions/types';

const getData = (state = [], action) => {
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    case GET_FILTERED_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({ initialData: getData });
