import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";
import "flowbite/dist/flowbite.min.js";
import Notifications from "@kyvg/vue3-notification";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(Notifications);

app.mount("#app");
