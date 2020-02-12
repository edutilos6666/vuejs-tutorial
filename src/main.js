import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
// import "vue-material/dist/theme/default.css";
// import "vue-material/dist/theme/black-green-dark.css";

// import "vue-material/dist/theme/black-green-light.css";
import "vue-material/dist/theme/default-dark.css";
Vue.use(VueMaterial);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
