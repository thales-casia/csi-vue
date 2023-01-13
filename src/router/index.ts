import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from '@/layout/index.vue';
import NotFound from '@/pages/404.vue';
import Home from '@/pages/home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    name: 'home',
    path: '/',
    component: Layout,
    children: [
      {
        name: 'home-article',
        path: '/',
        component: Home,
        meta: { title: '首页' }
      }
    ]
  },
  {
    name: 'article',
    path: '/article',
    component: Layout,
    children: [
      {
        name: 'article-article',
        path: ':id?',
        component: () => import('@/pages/article.vue'),
        props: true,
        meta: { title: '文章' }
      }
    ]
  },
  {
    name: '404',
    path: '/404',
    component: NotFound
  },
  {
    path: '/:catchAll(.*)', // 此处需特别注意至于最底部
    redirect: '/404'
  }
];
let history = createWebHistory();
const router = createRouter({
  history,
  routes,
});
router.beforeEach((to, _from, next) => {
  if (to.meta.title) {
    document.title = `Cyber-Physical Social Intelligence | ${to.meta.title}`;
  }
  next();
});

export default router;
