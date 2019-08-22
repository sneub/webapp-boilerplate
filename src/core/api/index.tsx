import axios from 'axios';
import fakeapi from './fakeapi';

import { API_SERVER_URL, USE_FAKE_API } from '../../constants';

axios.defaults.baseURL = API_SERVER_URL;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

let api = {};

if (USE_FAKE_API !== true) {
  api = {
    get: () => {},
    post: () => {},
  };
} else {
  api = fakeapi;
}

export default api;