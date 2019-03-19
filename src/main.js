import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
Vue.use(Vuetify);

// index.js or main.js
import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader

Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
}).$mount('#app');