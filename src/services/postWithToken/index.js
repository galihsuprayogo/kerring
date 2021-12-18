import { service } from '../../config';

export const postWithToken = async (url, data, token) => {
  const obj = {};
  try {
    const res = await service.post(`${url}`, data, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }
    });
    obj.data = res.data;
    obj.status = res.status;
    return obj;
  } catch (error) {
    obj.data = error.response.data;
    obj.status = error.response.status;
    return obj;
  }
};
