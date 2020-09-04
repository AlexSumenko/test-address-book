import * as actionTypes from './actionTypes';
import { httpAddressRequest } from '../../utils/fetch';

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
    httpAddressRequest('/addresses.json', 'GET')
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
    httpAddressRequest(`/addresses/${addressId}.json`, 'DELETE');
    dispatch(removeAddress(addressId));
  };
};

export const addAddress = address => {
  return dispatch => {
    httpAddressRequest('/addresses.json', 'POST', address);
  };
};

export const editAddress = (address, addressId) => {
  return dispatch => {
    httpAddressRequest(`/addresses/${addressId}.json`, 'PUT', address);
  };
};
