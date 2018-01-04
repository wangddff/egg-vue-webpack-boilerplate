import { sync } from 'vuex-router-sync';
import Vue from 'vue';
import store from 'store/app';
import router from 'component/app/router';
import app from './app.vue';
import Layout from 'component/layout/app';
import clientRender from 'client';
import serverRender from 'server';

Vue.component(Layout.name, Layout);
sync(store, router);

const options = {
  base: '/app',
  ...app,
  router,
  store
};

export default EASY_ENV_IS_NODE ? serverRender(options) : clientRender(options);
