const Dashboard = () => import("Pages/Dashboard.vue");
const Settings = () => import("Pages/Settings.vue");
const Users = () => import("Pages/Users.vue");

export default [
  /* Start Authenticated Routes */
  {
    path: "/dashboard",
    component: Dashboard,
    name: "dashboard",
    meta: {auth: ['admin', 'warehouse','customer']},
  },
  {
    path: "/settings",
    component: Settings,
    name: "settings",
    meta: {auth: ['admin', 'warehouse','customer']},
  },
  {
    path: "/users",
    component: Users,
    name: "users",
    meta: {auth: ['admin','warehouse','customer']},
  }
  /* End Authenticated Routes */
];
