import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import router from "./router";
import store from "./store";
import "./style/reset.less";

const app = createApp(App);
app.use(store);
app.use(ElementPlus);
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component as Component);
// }
app.use(router);
app.mount("#app");
