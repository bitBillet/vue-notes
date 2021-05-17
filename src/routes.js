import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home'
import Example from "./pages/Example";

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/example',
			name: 'example',
			component: Example
		}
	]
})