{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "barrage"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "barrage"}};{{/if_eq}}
{{#router}}
import router from './router'{{#if_eq lintConfig "barrage"}};{{/if_eq}}
{{/router}}
{{#vueStash}}
import VueStash from 'vue-stash'{{#if_eq lintConfig "barrage"}};{{/if_eq}}
{{/vueStash}}
{{#vuex}}
import Vuex from 'vuex'{{#if_eq lintConfig "barrage"}};{{/if_eq}}
{{/vuex}}
{{#moment}}
import moment from 'moment'{{#if_eq lintConfig "barrage"}};{{/if_eq}}
{{/moment}}
{{#lodash}}
import lodash from 'lodash'{{#if_eq lintConfig "barrage"}};{{/if_eq}}
window._ = lodash{{#if_eq lintConfig "barrage"}};{{/if_eq}}
{{/lodash}}
{{#datefns}}
import * as DateFns from 'date-fns'{{#if_eq lintConfig "barrage"}};{{/if_eq}}
{{/datefns}}
{{#socket}}
/*
import VueSocketio from 'vue-socket.io';
Vue.use(VueSocketio, 'http://socketserver.com:1923');
*/
{{/socket}}

{{#vueResource}}
Vue.use(VueResource){{#if_eq lintConfig "barrage"}};{{/if_eq}}
{{/vueResource}}
{{#vueStash}}
Vue.use(VueStash){{#if_eq lintConfig "barrage"}};{{/if_eq}}
{{/vueStash}}
{{#vuex}}
Vue.use(Vuex){{#if_eq lintConfig "barrage"}};{{/if_eq}}
{{/vuex}}
{{#moment}}
Vue.use(moment){{#if_eq lintConfig "barrage"}};{{/if_eq}}
{{/moment}}
{{#datefns}}
Vue.use(DateFns){{#if_eq lintConfig "barrage"}};{{/if_eq}}
{{/datefns}}

Vue.config.productionTip = false{{#if_eq lintConfig "barrage"}};{{/if_eq}}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "barrage"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }
  {{/if_eq}}
}){{#if_eq lintConfig "barrage"}};{{/if_eq}}

console.log('Init!');
