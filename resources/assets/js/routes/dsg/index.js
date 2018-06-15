const Dsg = () => import("Pages/Dsg/Index.vue");
const CreateDsg = () => import("Pages/Dsg/CreateDsg.vue");
const EditDsg = () => import("Pages/Dsg/EditDsg.vue");

export default [
  /* Start Users Routes */
  {
    path: "/receiving",
    component: Dsg,
    name: "dsg",
    meta: { auth: ["admin"] }
  },
  {
    path: "/dsg/create",
    component: CreateDsg,
    name: "create-dsg",
    meta: { auth: ["admin"] }
  },
  {
    path: "/dsg/:id",
    component: EditDsg,
    name: "edit-dsg",
    meta: { auth: ["admin"] },
    props: true
  }
  /* End Users Routes */
];
