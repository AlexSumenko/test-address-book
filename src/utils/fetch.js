import { API_CONFIG } from './constants';

export const getData = url => {
  return fetch(`${API_CONFIG.baseUrl}/${url}`).then(res => res.json());
};

export const postData = (url, data) => {
  fetch(`${API_CONFIG.baseUrl}/${url}`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

export const deleteData = url => {
  fetch(`${API_CONFIG.baseUrl}/${url}`, {
    method: 'DELETE',
  }).then(res => res.json());
};

export const putData = (url, data) => {
  fetch(`${API_CONFIG.baseUrl}/${url}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
};
