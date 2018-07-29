const Warehouse = () => import("Pages/Warehouse/Index.vue");
const CreateWarehouse = () => import("Pages/Warehouse/CreateWarehouse.vue");
const EditWarehouse = () => import("Pages/Warehouse/EditWarehouse.vue");
const ViewWarehouse = () => import("Pages/Warehouse/ViewWarehouse.vue");

export default [
  /* Start Users Routes */
  {
    path: "/warehouse",
    component: Warehouse,
    name: "warehouse",
    meta: { auth: ["warehouse"] }
  },
  {
    path: "/warehouse/dsg/create",
    component: CreateWarehouse,
    name: "create-warehouse",
    meta: { auth: ["warehouse"] }
  },
  {
    path: "/warehouse/dsg/:id/view",
    component: ViewWarehouse,
    name: "view-warehouse",
    meta: { auth: ["warehouse"] },
    props: true
  },
  {
    path: "/warehouse/dsg/:id/edit",
    component: EditWarehouse,
    name: "edit-warehouse",
    meta: { auth: ["warehouse","admin"] },
    props: true
  }
  /* End Users Routes */
];
