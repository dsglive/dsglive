const Home = () => import("Pages/Login.vue");

export default [
  /* Front End Routes */
  {
    path: "/",
    name: "home",
    component: Home,
    meta: { auth: false }
  }
];
