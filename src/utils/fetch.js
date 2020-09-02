import { API_CONFIG } from './constants';

export const getData = url => {
  return fetch(`${API_CONFIG.baseUrl}/${url}`).then(res => res.json());
};

export const postData = (url, address) => {
  fetch(`${API_CONFIG.baseUrl}/${url}`, {
    method: 'POST',
    body: JSON.stringify({
      name: address.name,
      address: address.address,
      latitude: address.latitude,
      longitude: address.longitude,
    }),
  });
};

export const deleteData = url => {
  fetch(`${API_CONFIG.baseUrl}/${url}`, {
    method: 'DELETE',
  }).then(res => res.json());
};
