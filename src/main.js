import 'core-js/stable'
import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import Axios from 'axios'
import store from './store'

Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.prototype.$log = console.log.bind(console)

var myApi = Axios.create({
  baseURL: "http://127.0.0.1:5123",
  timeout: 60000
});

myApi.interceptors.request.use (
  function (config) {
    const token = store.getters.authToken;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject (error);
  }
);

myApi.interceptors.response.use((response) => {
  return response;
}, function (error) {  
  if (error.response.status === 401 || error.response.status === 403) {
    store.dispatch("signout");
    router.go("/signin");
  }
  return Promise.reject(error.response);
});

Vue.prototype.$axios = myApi;

new Vue({
  el: '#app',
  router,
  store,
  icons,
  template: '<App/>',
  components: {
    App
  }
})
