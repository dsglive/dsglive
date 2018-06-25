const Logistics = () => import("Pages/Logistics/Index.vue");
const CreateLogistics = () => import("Pages/Logistics/CreateLogistics.vue");
const EditLogistics = () => import("Pages/Logistics/EditLogistics.vue");

export default [
  /* Start Logistics Routes */
  {
    path: "/logistics",
    component: Logistics,
    name: "logistics",
    meta: { auth: ["admin"] }
  },
  {
    path: "/logistics/create-ticket",
    component: CreateLogistics,
    name: "create-logistics",
    meta: { auth: ["admin"] }
  },
  {
    path: "/logistics/edit-ticket/:id",
    component: EditLogistics,
    name: "edit-logistics",
    meta: { auth: ["admin"] },
    props: true
  }
  /* End Logistics Routes */
];
