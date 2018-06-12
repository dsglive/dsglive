const Dashboard = () => import("Pages/Dashboard.vue");
const Settings = () => import("Pages/Settings.vue");
const Users = () => import("Pages/Users.vue");
const CreateUser = () => import("Pages/CreateUser.vue");
const EditUser = () => import("Pages/EditUser.vue");

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
  },
  {
    path: "/users",
    component: Users,
    name: "users",
    meta: { auth: ["admin", "warehouse", "customer"] }
  },
  {
    path: "/users/create",
    component: CreateUser,
    name: "create-user",
    meta: { auth: ["admin"] }
  },
  {
    path: "/users/:id",
    component: EditUser,
    name: "edit-user",
    meta: { auth: ["admin"] },
    props: true
  }
  /* End Authenticated Routes */
];
