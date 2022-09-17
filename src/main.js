import { createApp } from 'vue';
import { createPinia } from 'pinia';
import FloatingVue from 'floating-vue';
import App from './App.vue';
import router from './router';
import '../assets/tailwind.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';

createApp(App).use(router).use(createPinia()).use(FloatingVue)
  .mount('#app');
