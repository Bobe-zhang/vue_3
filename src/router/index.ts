import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isTrue = routes.find((item) => {
    return item.path === to.fullPath;
  });
  if (!isTrue) {
    const route = {
      path: to.fullPath,
      component: () => import(`../components${to.fullPath}.vue`),
    };
    router.addRoute(route);
    routes.push(route);
    next({ ...to, replace: true });
  } else {
    next();
  }
});

export default router;
