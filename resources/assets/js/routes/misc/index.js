const Misc = () => import("Pages/Misc/Index.vue");
const CreateMisc = () => import("Pages/Misc/CreateMisc.vue");
const EditMisc = () => import("Pages/Misc/EditMisc.vue");

export default [
  /* Start Users Routes */
  {
    path: "/miscellaneous",
    component: Misc,
    name: "misc",
    meta: { auth: ["admin"] }
  },
  {
    path: "/miscellaneous/create",
    component: CreateMisc,
    name: "create-misc",
    meta: { auth: ["admin"] }
  },
  {
    path: "/miscellaneous/:id",
    component: EditMisc,
    name: "edit-misc",
    meta: { auth: ["admin"] },
    props: true
  }
  /* End Users Routes */
];
