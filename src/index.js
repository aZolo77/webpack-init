// ? https://www.youtube.com/watch?v=eMesm6Ef4VA [07:00]
// * Entry Point
import './js/common';
import './assets/css/main.css';
import './assets/scss/main.scss';

// - 1)
// import 'vue';
// - 2)
// import Vue from 'vue';

// - 3)
window.Vue = require('vue');
import store from './store';

Vue.component('example-component', require('./components/Example.vue').default);

const app = new Vue({
  data() {
    return {
      component: false
    };
  },
  store,
  el: '#app'
});
