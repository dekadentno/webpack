import Vue from 'vue'{{#if_eq lintConfig "barrage"}};{{/if_eq}}
import Router from 'vue-router'{{#if_eq lintConfig "barrage"}};{{/if_eq}}
import HelloWorld from '@/components/HelloWorld'{{#if_eq lintConfig "barrage"}};{{/if_eq}}

Vue.use(Router){{#if_eq lintConfig "barrage"}};{{/if_eq}}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
}){{#if_eq lintConfig "barrage"}};{{/if_eq}}
