const Home = () => import("Pages/Login.vue");
const Tutorials = () => import("Pages/Tutorials.vue");
export default [
  /* Front End Routes */
  {
    path: "/",
    name: "home",
    component: Home,
    meta: { auth: false }
  },
  {
    path: "/tutorials",
    component: Tutorials,
    name: "tutorials",
    meta: { auth: ["admin"] }
  }
];
