import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import ViewUIPlus from "view-ui-plus";
import "view-ui-plus/dist/styles/viewuiplus.css";

import VXETable from "vxe-table";
import "vxe-table/lib/style.css";

import WujieVue from "wujie-vue3";

createApp(App)
  .use(router)
  .use(store)
  .use(WujieVue)
  .use(ElementPlus)
  .use(ViewUIPlus)
  .use(VXETable)
  .mount("#app");
