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

import PVInputText from "primevue/inputtext";
import PVButton from "primevue/button";
import PVToast from "primevue/toast";
import PVToastService from "primevue/toastservice";
import PVAutoComplete from "primevue/autocomplete";
import PVCalendar from "primevue/calendar";
import PVEditor from "primevue/editor";
import PVChart from "primevue/chart";
import PVCarousel from "primevue/carousel";
import PVDataTable from "primevue/datatable";
import PVColumn from "primevue/column";
import PVColumnGroup from "primevue/columngroup";
import PVDataView from "primevue/dataview";
import PVDrowdown from "primevue/dropdown";
import PVDataViewLayoutOptions from "primevue/dataviewlayoutoptions";
import PVPanel from "primevue/panel";
import "primevue/resources/themes/nova-light/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

Vue.component("PVInputText", PVInputText);
Vue.component("PVButton", PVButton);
Vue.component("PVToast", PVToast);
Vue.component("PVAutoComplete", PVAutoComplete);
Vue.component("PVCalendar", PVCalendar);
Vue.component("PVEditor", PVEditor);
Vue.component("PVChart", PVChart);
Vue.component("PVCarousel", PVCarousel);
Vue.component("PVDataTable", PVDataTable);
Vue.component("PVColumn", PVColumn);
Vue.component("PVColumnGroup", PVColumnGroup);
Vue.component("PVDataView", PVDataView);
Vue.component("PVDrowdown", PVDrowdown);
Vue.component("PVDataViewLayoutOptions", PVDataViewLayoutOptions);
Vue.component("PVPanel", PVPanel);

//=== Keen UI ====//
// import KeenUI from "keen-ui";
import { UiAlert, UiButton, UiIcon, UiTab, UiTabs } from "keen-ui";

Vue.use(PVToastService);
// Vue.use(KeenUI);
// Vue.component("KeenUI", KeenUI);
Vue.component("UiAlert", UiAlert);
Vue.component("UiButton", UiButton);
Vue.component("UiIcon", UiIcon);
Vue.component("UiTab", UiTab);
Vue.component("UiTabs", UiTabs);

// import vuetify from "vuetify";
// import "vuetify/dist/vuetify.min.css";
// Vue.use(vuetify);
import vuetify from "@/plugins/vuetify";

new Vue({
  router,
  render: h => h(App),
  vuetify,
  components: {}
}).$mount("#app");
