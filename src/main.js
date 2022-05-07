import Vue from 'vue'
import ELEMENT from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import formCreate from '@form-create/element-ui';
import FcDesigner from '@/components/form-designer';

import App from './App.vue'
import router from './router'
import '@/assets/style.css'

Vue.config.productionTip = false

Vue.use(ELEMENT);
Vue.use(formCreate);
Vue.component('FcDesigner', FcDesigner);

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
