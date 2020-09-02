import * as actionTypes from './actionTypes';
import { getData, postData, deleteData } from '../../utils/fetch';

const getAddresses = addresses => {
  return {
    type: actionTypes.GET_ADDRESSES,
    addresses: addresses,
  };
};

const removeAddress = addressId => {
  return {
    type: actionTypes.DELETE_ADDRESS,
    addressId: addressId,
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

export const deleteAddress = addressId => {
  return dispatch => {
    deleteData(`/addresses/${addressId}.json`);
    dispatch(removeAddress(addressId));
  };
};

export const addAddress = address => {
  return dispatch => {
    postData('/addresses.json', address);
  };
};
