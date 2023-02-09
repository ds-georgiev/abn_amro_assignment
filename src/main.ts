import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import DetailsComponent from "./components/DetailsComponent.vue";
import SearchComponent from "./components/SearchComponent.vue";
import TileComponent from "./components/TileComponent.vue";
import SliderComponent from "./components/SliderComponent.vue";

import FontAwesomeIcon from "./plugins/fontawesome";
import "./assets/style/main.scss";

createApp(App)
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  .component("DetailsComponent", DetailsComponent)
  .component("SearchComponent", SearchComponent)
  .component("TileComponent", TileComponent)
  .component("SliderComponent", SliderComponent)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
