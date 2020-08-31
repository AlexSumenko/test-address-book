import { API_CONFIG } from './constants';

export const getData = url => {
  return fetch(`${API_CONFIG.baseUrl}/${url}`).then(res => res.json());
};

export const postData = url => {
  fetch(`${API_CONFIG.baseUrl}/${url}`, {
    method: 'POST',
    body: JSON.stringify({ test: 1, test1: 2 }),
  });
};
