import NotFoundView from "../components/404.vue";
import tempPage from "../pages/tempPage.vue";
import app from "../App.vue";
import test from "../pages/test.vue";
// Routes
const routes = [
	//登录
	{
		path: '/',
		name: '',
		component: tempPage,

	},
	{
		path: '/tempPage',
		name: 'tempPage',
		component: tempPage,

	},

	{
		path: '/test',
		component: app,
		children: [{
			path: '*',
			component: test
		}]
	},
//	{
//		path: '',
//		component: app,
//		children: []
//	},
	{
		path: '*',
		component: NotFoundView
	}
]

export default routes