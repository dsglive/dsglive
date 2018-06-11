const Home = () => import("Pages/Home.vue");
const Support = () => import("Pages/Support.vue");

export default [
  /* Front End Routes */
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/support",
    component: Support,
    name: "support",
  }
];
