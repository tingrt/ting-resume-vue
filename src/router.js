import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue';
import Skills from './views/Skills';
import Experience from './views/Experience'
import Contact from './views/Contact';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills
    },
    {
      path: '/work',
      name: 'work',
      component: Experience
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
  ]
})
