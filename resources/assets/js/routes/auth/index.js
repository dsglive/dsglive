const Login = () => import("Pages/Login.vue");
const Logout = () => import("Pages/Logout.vue");

export default [
  /* Start Authentication Routes */
  {
    path: "/login",
    component: Login,
    name: "login",
    meta: { auth: false }
  },
  {
    path: "/logout",
    component: Logout,
    name: "logout",
    meta: { auth: ["admin", "warehouse", "customer"] }
  }
];
