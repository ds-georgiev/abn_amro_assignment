import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/tvshows",
    name: "TVShows",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TVShowsView.vue"),
  },
  {
    path: "/tvshows/:id",
    name: "ShowDetails",
    component: () => import("../views/TVShowDetailsView.vue"),
  },
  {
    path: "/genre/:type",
    name: "Genre",
    component: () => import("../views/GenreView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
