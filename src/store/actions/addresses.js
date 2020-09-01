import * as actionTypes from './actionTypes';
import { getData } from '../../utils/fetch';

const getAddresses = addresses => {
  return {
    type: actionTypes.GET_ADDRESSES,
    addresses: addresses,
  };
};

export const saveAddresses = () => {
  return dispatch => {
    getData('/addresses.json')
      .then(res => {
        const fetchedAddresses = [];
        for (let key in res) {
          fetchedAddresses.push({ ...res[key], id: key });
        }
        dispatch(getAddresses(fetchedAddresses));
      })
      .catch(err => console.log(err));
  };
};
