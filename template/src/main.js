{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#router}}
import router from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/router}}
{{#axios}}
import axios from 'axios'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/axios}}
 {{#vueAxios}}
import VueAxios from 'vue-axios'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/vueAxios}}
{{#vueResource}}
import VueResource from 'vue-resource'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/vueResource}}
{{#vueStash}}
import VueStash from 'vue-stash'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/vueStash}}
{{#vuex}}
import Vuex from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/vuex}}
{{#vueAxios}}
Vue.use(VueAxios){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/vueAxios}}
{{#vueResource}}
Vue.use(VueResource){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/vueResource}}
{{#vueStash}}
Vue.use(VueStash){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/vueStash}}
{{#vuex}}
Vue.use(Vuex){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/vuex}}
  
Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

console.log("Init!");

window._log = window.console.log.bind && window.console.log.bind(window.console) || function(){
};
window._wrn = window.console.warn.bind && window.console.warn.bind(window.console) || function(){
};
window._err = window.console.error.bind && window.console.error.bind(window.console) || function(){
};
window._info = window.console.info.bind && window.console.info.bind(window.console) || function(){
};
