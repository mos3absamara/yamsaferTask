import Vue from 'vue'
import App from './App.vue'
import {store} from "./store/store";
import {router} from "./router/router";
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "vue-material-design-icons/styles.css"
import {library} from '@fortawesome/fontawesome-svg-core'
import {faSadTear} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faSadTear)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  store: store
})
