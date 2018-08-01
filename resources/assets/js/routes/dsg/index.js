const Dsg = () => import("Pages/Dsg/Index.vue");
const CreateDsg = () => import("Pages/Dsg/CreateDsg.vue");
const EditDsg = () => import("Pages/Dsg/EditDsg.vue");
const ArchivedDsg = () => import("Pages/Dsg/ArchivedDsg.vue");
const ViewArchived = () => import("Pages/Dsg/ViewArchived.vue");
export default [
  /* Start Users Routes */
  {
    path: "/receiving",
    component: Dsg,
    name: "dsg",
    meta: { auth: ["admin", "warehouse"] }
  },
  {
    path: "/archived/dsg",
    component: ArchivedDsg,
    name: "archived-dsg",
    meta: { auth: ["admin", "warehouse"] }
  },
  {
    path: "/archived/view/:id",
    component: ViewArchived,
    name: "view-archived-dsg",
    meta: { auth: ["admin", "warehouse"] },
    props: true
  },
  {
    path: "/receiving/create",
    component: CreateDsg,
    name: "create-dsg",
    meta: { auth: ["admin"] }
  },
  {
    path: "/receiving/:id",
    component: EditDsg,
    name: "edit-dsg",
    meta: { auth: ["admin"] },
    props: true
  }
  /* End Users Routes */
];
