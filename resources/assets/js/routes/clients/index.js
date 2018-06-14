const Clients = () => import("Pages/Clients.vue");
const CreateClient = () => import("Pages/CreateClient.vue");
const EditClient = () => import("Pages/EditClient.vue");

export default [
  /* Start Users Routes */
  {
    path: "/clients",
    component: Clients,
    name: "clients",
    meta: { auth: ["customer"] }
  },
  {
    path: "/clients/create",
    component: CreateClient,
    name: "create-client",
    meta: { auth: ["customer"] }
  },
  {
    path: "/clients/:id",
    component: EditClient,
    name: "edit-client",
    meta: { auth: ["customer"] },
    props: true
  }
  /* End Users Routes */
];
