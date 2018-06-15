const Bins = () => import("Pages/Bin/Index.vue");
const CreateBin = () => import("Pages/Bin/CreateBin.vue");
const EditBin = () => import("Pages/Bin/EditBin.vue");

export default [
  /* Start Users Routes */
  {
    path: "/bins",
    component: Bins,
    name: "bins",
    meta: { auth: ["admin"] }
  },
  {
    path: "/bins/create",
    component: CreateBin,
    name: "create-bin",
    meta: { auth: ["admin"] }
  },
  {
    path: "/bins/:id",
    component: EditBin,
    name: "edit-bin",
    meta: { auth: ["admin"] },
    props: true
  }
  /* End Users Routes */
];
