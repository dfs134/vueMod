/**
=========================================================
* Vue Argon Dashboard 2 PRO - v3.0.1
=========================================================

* Product Page: https://creative-tim.com/product/vue-argon-dashboard-pro
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import VueTilt from "vue-tilt.js";
import VueSweetalert2 from "vue-sweetalert2";
import ArgonDashboard from "./argon-dashboard";
import axios from 'axios';
import moment from 'moment';
import mitts from 'mitt';
import VueCookies from 'vue-cookies'
// import changeList from './js/changeListImg'
// import mod from './js/mod';
// import remocoon from './js/remocon';
// import launcherfunction from './js/launcherfunction';
// import goutils from './js/goutils';
// import jQuery from 'jquery';

const appInstance = createApp(App);
const emitter = mitts();
appInstance.use(store);
appInstance.use(router);
appInstance.use(VueTilt);
appInstance.use(VueSweetalert2);
appInstance.use(ArgonDashboard);
appInstance.use(moment);
// appInstance.use(changeList);
// appInstance.use(mod);
// appInstance.use(remocoon);
// appInstance.use(launcherfunction);
// appInstance.use(goutils);
// appInstance.config.globalProperties.jQuery = jQuery;
appInstance.use(VueCookies, { expires: '7d' });
appInstance.config.globalProperties.$axios = axios;
appInstance.config.globalProperties.$emitter = emitter;
appInstance.mount("#app");

