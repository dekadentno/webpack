{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "none"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "none"}};{{/if_eq}}
{{#router}}
import router from './router'{{#if_eq lintConfig "none"}};{{/if_eq}}
{{/router}}
{{#vueResource}}
<<<<<<< HEAD
import VueResource from 'vue-resource'{{#if_eq lintConfig "none"}};{{/if_eq}}
{{/vueResource}}
{{#vueStash}}
import VueStash from 'vue-stash'{{#if_eq lintConfig "none"}};{{/if_eq}}
{{/vueStash}}
{{#vuex}}
import Vuex from 'vuex'{{#if_eq lintConfig "none"}};{{/if_eq}}
{{/vuex}}
{{#moment}}
import moment from 'moment'{{#if_eq lintConfig "none"}};{{/if_eq}}
{{/moment}}
{{#lodash}}
import lodash from 'lodash'{{#if_eq lintConfig "none"}};{{/if_eq}}
window._ = lodash{{#if_eq lintConfig "none"}};{{/if_eq}}
=======
import VueResource from 'vue-resource'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/vueResource}}
{{#vueStash}}
import VueStash from 'vue-stash'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/vueStash}}
{{#vuex}}
import Vuex from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/vuex}}
{{#moment}}
import moment from 'moment'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/moment}}
{{#lodash}}
import lodash from 'lodash'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
window._ = lodash{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
>>>>>>> master
{{/lodash}}
{{#socket}}
/*
import VueSocketio from 'vue-socket.io';
Vue.use(VueSocketio, 'http://socketserver.com:1923');
*/
{{/socket}}
<<<<<<< HEAD

{{#vueResource}}
Vue.use(VueResource){{#if_eq lintConfig "none"}};{{/if_eq}}
{{/vueResource}}
{{#vueStash}}
Vue.use(VueStash){{#if_eq lintConfig "none"}};{{/if_eq}}
{{/vueStash}}
{{#vuex}}
Vue.use(Vuex){{#if_eq lintConfig "none"}};{{/if_eq}}
{{/vuex}}
  {{#moment}}
Vue.use(moment){{#if_eq lintConfig "none"}};{{/if_eq}}
{{/moment}}

Vue.config.productionTip = false{{#if_eq lintConfig "none"}};{{/if_eq}}
=======
  
{{#vueResource}}
Vue.use(VueResource){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/vueResource}}
{{#vueStash}}
Vue.use(VueStash){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/vueStash}}
{{#vuex}}
Vue.use(Vuex){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/vuex}}
  {{#moment}}
Vue.use(moment){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/moment}}
  
Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
>>>>>>> master

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "none"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }
  {{/if_eq}}
<<<<<<< HEAD
}){{#if_eq lintConfig "none"}};{{/if_eq}}
=======
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
>>>>>>> master

console.log('Init!');
