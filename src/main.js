import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'; // Progress 进度条
import store from './store';
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import 'normalize.css/normalize.css'
import 'nprogress/nprogress.css';// Progress 进度条 样式

Vue.config.productionTip = false;
console.log(process.env.NODE_ENV)
// const whiteList = ['/login', '/authredirect'];// 不重定向白名单
router.beforeEach((to, from, next) => {
    console.log(to, from)
    NProgress.start(); // 开启Progress
    NProgress.done();
    next();
});

router.afterEach(() => {
    NProgress.done(); // 结束Progress
});

Vue.use(Vuex);
Vue.use(VueRouter);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
