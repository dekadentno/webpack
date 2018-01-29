{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "barrage"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "barrage"}};{{/if_eq}}
{{#router}}
import router from './router'{{#if_eq lintConfig "barrage"}};{{/if_eq}}
{{/router}}
{{#if_eq stateManagementConfig "vueStash"}}
import VueStash from 'vue-stash'{{#if_eq lintConfig "barrage"}};{{/if_eq}}
{{/if_eq}}
{{#if_eq stateManagementConfig "vuex"}}
import Vuex from 'vuex'{{#if_eq lintConfig "barrage"}};{{/if_eq}}
{{/if_eq}}
{{#if_eq dateLibrary "moment"}}
import moment from 'moment'{{#if_eq lintConfig "barrage"}};{{/if_eq}}
{{/if_eq}}
{{#lodash}}
import lodash from 'lodash'{{#if_eq lintConfig "barrage"}};{{/if_eq}}
window._ = lodash{{#if_eq lintConfig "barrage"}};{{/if_eq}}
{{/lodash}}
{{#if_eq dateLibrary "datefns"}}
import * as DateFns from 'date-fns'{{#if_eq lintConfig "barrage"}};{{/if_eq}}
{{/if_eq}}
{{#noty}}
import 'vuejs-noty/dist/vuejs-noty.css'{{#if_eq lintConfig "barrage"}};{{/if_eq}}
import VueNoty from 'vuejs-noty'{{#if_eq lintConfig "barrage"}};{{/if_eq}}
{{/noty}}
{{#if_eq charts "chartjs"}}
import VueChart from 'vue-chart-js'{{#if_eq lintConfig "barrage"}};{{/if_eq}}
{{/if_eq}}
{{#if_eq charts "g2"}}
import G2 from '@antv/g2'{{#if_eq lintConfig "barrage"}};{{/if_eq}}
{{/if_eq}}
{{#socket}}
/*
import VueSocketio from 'vue-socket.io';
Vue.use(VueSocketio, 'http://socketserver.com:1923');
*/
{{/socket}}

{{#vueResource}}
Vue.use(VueResource){{#if_eq lintConfig "barrage"}};{{/if_eq}}
{{/vueResource}}
{{#noty}}
Vue.use(VueNoty){{#if_eq lintConfig "barrage"}};{{/if_eq}}
{{/noty}}
{{#if_eq stateManagementConfig "vueStash"}}
Vue.use(VueStash){{#if_eq lintConfig "barrage"}};{{/if_eq}}
{{/if_eq}}
{{#if_eq stateManagementConfig "vuex"}}
Vue.use(Vuex){{#if_eq lintConfig "barrage"}};{{/if_eq}}
{{/if_eq}}
{{#if_eq dateLibrary "moment"}}
Vue.use(moment){{#if_eq lintConfig "barrage"}};{{/if_eq}}
{{/if_eq}}
{{#if_eq dateLibrary "datefns"}}
Vue.use(DateFns){{#if_eq lintConfig "barrage"}};{{/if_eq}}
{{/if_eq}}
{{#if_eq charts "chartjs"}}
Vue.use(VueChart.default){{#if_eq lintConfig "barrage"}};{{/if_eq}}
{{/if_eq}}
{{#if_eq charts "g2"}}
Vue.use(G2){{#if_eq lintConfig "barrage"}};{{/if_eq}}
{{/if_eq}}

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
