import "./style.css";
import { createApp } from "vue";
import App from "./App.vue";
import { registerComponents } from "./plugin/global-comp.js";

const app = createApp(App);

// Register Global Components
registerComponents(app);

app.mount("#app");
