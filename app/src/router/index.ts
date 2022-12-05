import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login/index.vue"),
  },
  {
    path: "/home",
    name: "Home",
    meta: {
      title: "主页",
    },
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    meta: {
      title: "详情",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  // 根据路由元信息设置文档标题
  window.document.title = to.meta.title as string;
  next();
});

export default router;
