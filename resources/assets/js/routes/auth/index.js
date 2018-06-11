const Login = () => import("Pages/Login.vue");
const Logout = () => import("Pages/Logout.vue");
const Register = () => import("Pages/Register.vue");

export default [
  /* Start Authentication Routes */
  {
    path: "/login",
    component: Login,
    name: "login",
    meta: {auth: false}
  },
  {
    path: "/logout",
    component: Logout,
    name: "logout",
    meta: {auth: ['admin', 'warehouse','customer']},
  },
  {
    path: "/register",
    component: Register,
    name: "register",
    meta: {auth: false}
  }
  /* End Authentication Routes */
];
