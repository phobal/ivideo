import axios from 'axios';

const BASEURL =
  'https://raw.githubusercontent.com/phobal/ivideo/master/resources/viplist.json';

const instance = axios.create({
  baseURL: BASEURL,
  timeout: 10000
});

const createAPI = (url, method, config) => {
  config = config || {} // eslint-disable-line
  return instance({
    url,
    method,
    ...config
  });
};

const source = {
  getAllVideoSource: (config) => createAPI('', 'GET', config)
};

export { source };
