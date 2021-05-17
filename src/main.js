import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import router from './routes'
import store from './store'

Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
	store,
	router,
	render: h => h(App),
}).$mount('#app')
