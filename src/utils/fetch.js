import { API_CONFIG } from './constants';

export const getData = url => {
  return fetch(`${API_CONFIG.baseUrl}/${url}`).then(res => res.json());
};

export const postData = url => {
  fetch(`${API_CONFIG.baseUrl}/${url}`, {
    method: 'POST',
    body: JSON.stringify({
      name: 'First test address',
      address: 'Tallinn, Tartu mnt 13',
      latitude: 59.4344315,
      longitude: 24.7590667,
    }),
  });
};

export const deleteData = url => {
  fetch(`${API_CONFIG.baseUrl}/${url}`, {
    method: 'DELETE',
  }).then(res => res.json());
};
