import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/tvshows",
    name: "TVShows",
    component: () => import("../views/TVShowsView.vue"),
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
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("../views/util/PageNotFoundView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
