import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
//Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css"; //render the icons
const vuetify = createVuetify({
  components,
  directives,
});
//Pinia config
import { createPinia } from "pinia";
const pinia = createPinia();

//Emitter config (Global Emit)
//Emitter definition is resemble to group of events with unique name that can be emit and listen over the entire application and apply some anonymous functions
import mitt from "mitt";
const emitter = mitt();

createApp(App)
  .use(router)
  .use(vuetify)
  .use(pinia)
  .provide("emitter", emitter) //provide emitter globally with key "emitter" and will be injected into child components or views
  .mount("#app");
