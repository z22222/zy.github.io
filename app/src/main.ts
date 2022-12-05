import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "./router";
import store from "./store";
import "./style/reset.less";

const app = createApp(App);
app.use(store);
app.use(ElementPlus);
app.use(router);
app.mount("#app");
