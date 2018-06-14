const Dashboard = () => import("Pages/Dashboard.vue");
const Settings = () => import("Pages/Settings.vue");

export default [
  /* Start Authenticated Routes */
  {
    path: "/dashboard",
    component: Dashboard,
    name: "dashboard",
    meta: { auth: ["admin", "warehouse", "customer"] }
  },
  {
    path: "/settings",
    component: Settings,
    name: "settings",
    meta: { auth: ["admin", "warehouse", "customer"] }
  }
  /* End Authenticated Routes */
];
