import VueRouter from 'vue-router'
import Layout from '../views/Layout/index'

const _import = file => () => import('@/views/' + file + '.vue');
// const _import = require('./_import_' + process.env.NODE_ENV);
const routes = [
    {
        path: '/',
        name: '首页',
        redirect: '/dashboard',
        component: Layout,
        children: [
            {
                path: 'dashboard',
                name: 'dashboard',
                component: _import('dashboard/index'),
            }
        ]
    },
    {
        path: '/page1',
        redirect: '/page1/index',
        component: Layout,
        children: [
            {
                path: 'index',
                name: 'page1',
                component: _import('page1/index'),
            }
        ]
    },
];

const router = new VueRouter({
    routes
});

export default router;
