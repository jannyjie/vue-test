import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/css/reset.css";
import { numPrice } from "@/lib/tools.js";
const app = createApp(App);

// 抓取實體DOM input 
app.directive("focus", {
  mounted(el) {
    el.focus();
    console.log(el);
  }
});

// 千分位 範例
app.directive("price", {
  mounted(el, binding) {
    const p = numPrice(binding.value);
    el.innerHTML = p;
  },
  updated(el, binding) {
    const p = numPrice(binding.value);
    el.innerHTML = p;
  },
});

app.use(router)
app.mount("#app");
