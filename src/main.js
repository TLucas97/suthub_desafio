import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueTheMask from 'vue-the-mask'
import money from 'v-money'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(money, {precision: 4})
Vue.use(VueTheMask)
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
