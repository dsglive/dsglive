const Shippers = () => import("Pages/Shipper/Index.vue");
const CreateShipper = () => import("Pages/Shipper/CreateShipper.vue");
const EditShipper = () => import("Pages/Shipper/EditShipper.vue");

export default [
  /* Start Users Routes */
  {
    path: "/shippers",
    component: Shippers,
    name: "shippers",
    meta: { auth: ["admin"] }
  },
  {
    path: "/shippers/create",
    component: CreateShipper,
    name: "create-shipper",
    meta: { auth: ["admin"] }
  },
  {
    path: "/shippers/:id",
    component: EditShipper,
    name: "edit-shipper",
    meta: { auth: ["admin"] },
    props: true
  }
  /* End Users Routes */
];
