import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
