import * as actionTypes from './actionTypes';
import { getData } from '../../utils/fetch';

export const getAddresses = addresses => {
  return {
    type: actionTypes.GET_ADDRESSES,
    addresses: addresses,
  };
};

export const saveAddresses = () => {
  return dispatch => {
    getData('/addresses.json')
      .then(res => dispatch(getAddresses(res)))
      .catch(err => console.log(err));
  };
};
