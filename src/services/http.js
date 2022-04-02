import axios from 'axios';

axios
  .interceptors
  .response
  .use(null, error => {
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;

    if (!expectedError) {
      const message = error.message && error.message === 'Network Error'
        ? error.message
        : 'An unexpected error occurred!';
      console.log(message);
      return Promise.reject(error);
    }

    const message = def => error.response.data.message || def;

    switch (error.response.status) {
      case 400:
        console.log('Bad Request', 'error');
        break;
      case 401:
        localStorage.removeItem('auth');
        console.log(message('Authorize please'), 'error');
        break;
      case 403:
        console.log(message('Forbidden'), 'error');
        break;
      case 404:
        console.log('Not found', 'error');
        break;
      case 409:
        console.log(message('Conflict with the current state.'), 'error');
        break;
      default:
    }
    return Promise.reject(error);
  });

axios
  .interceptors
  .request
  .use(config => {
    config.baseURL = 'https://api.nytimes.com/svc';
    config.params = {
      ...config.params,
      'api-key': '6j3kXWFWmpK8ycpgFoL9IFMhUnfgOQOF',
    };
    return config;
  });

const HttpService = {
  get: (url, config) => axios.get(url, config).then(({ data }) => data),
  post: (url, data, config) => axios.post(url, data, config).then(({ data }) => data),
  put: (url, data, config) => axios.put(url, data, config).then(({ data }) => data),
  delete: (url, config) => axios.delete(url, config).then(({ data }) => data),
};

export default HttpService;
