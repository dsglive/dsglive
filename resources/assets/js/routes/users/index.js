const Users = () => import("Pages/Users.vue");
const CreateUser = () => import("Pages/CreateUser.vue");
const EditUser = () => import("Pages/EditUser.vue");

export default [
  /* Start Users Routes */
  {
    path: "/users",
    component: Users,
    name: "users",
    meta: { auth: ["admin"] }
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
  /* End Users Routes */
];
