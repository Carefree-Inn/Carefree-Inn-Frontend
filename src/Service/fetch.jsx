import Taro from '@tarojs/taro';

const preHttp = 'http://139.196.30.123:8080/inn/api/v1';
const Fetch = (url, data = {}, method = 'GET') => {
  const header = {
    'content-type': 'application/json',
    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBY2NvdW50IjoiMjAyMTIxMzk3NSIsImV4cCI6MTY4ODM0OTA4MywiaXNzIjoiQ0NOVS1Jbm4ifQ.e-H3G_z-xDM9UG9-d9FGaRUtWAQVjzclpjuOgDR91B8'/* Taro.getStorageSync('token') */
  };

  return Taro.request({
    url: preHttp + url,
    data,
    method,
    header
  }).then(res => {
    switch (res.statusCode) {
      case 200:
        if (res.data) {
          return res.data;
        } else {
          return res.code; // 业务逻辑错误，返回业务错误码
        }
      case 400:
        throw new Error('没有权限访问');
      case 401:
        return res.data;
      case 404:
        throw new Error('not found');
      case 500:
        throw new Error('服务器错误');
    }
  }).catch((e) => {
    console.log(e)
  })
};



export default Fetch;
