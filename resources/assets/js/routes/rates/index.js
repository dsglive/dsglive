const Rates = () => import("Pages/Rate/Index.vue");
const CreateRate = () => import("Pages/Rate/CreateRate.vue");
const EditRate = () => import("Pages/Rate/EditRate.vue");

export default [
  /* Start Users Routes */
  {
    path: "/rates",
    component: Rates,
    name: "rates",
    meta: { auth: ["admin"] }
  },
  {
    path: "/rates/create",
    component: CreateRate,
    name: "create-rate",
    meta: { auth: ["admin"] }
  },
  {
    path: "/rates/:id",
    component: EditRate,
    name: "edit-rate",
    meta: { auth: ["admin"] },
    props: true
  }
  /* End Users Routes */
];
