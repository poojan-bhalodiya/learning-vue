import counter from "../component/counter.vue";

export function registerComponents(app) {
  app.component("Counter", counter);
}
