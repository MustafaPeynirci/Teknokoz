import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "animate.css";
import "swiper/css";

import { createApp } from 'vue'
import App from './App.vue'
import ToastPlugin from 'vue-toast-notification';

createApp(App).use(ToastPlugin).mount('#app')

import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/js/all.js";
