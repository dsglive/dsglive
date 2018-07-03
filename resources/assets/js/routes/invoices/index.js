const Invoice = () => import("Pages/Invoice/Index.vue");
const GenerateInvoice = () => import("Pages/Invoice/GenerateInvoice.vue");
const ViewInvoice = () => import("Pages/Invoice/ViewInvoice.vue");

export default [
  /* Start Users Routes */
  {
    path: "/invoices",
    component: Invoice,
    name: "invoices",
    meta: { auth: ["admin"] }
  },
  {
    path: "/invoices/generate",
    component: GenerateInvoice,
    name: "generate-invoices",
    meta: { auth: ["admin"] }
  },
  {
    path: "/invoices/:id",
    component: ViewInvoice,
    name: "view-invoice",
    meta: { auth: ["admin"] },
    props: true
  }
  /* End Users Routes */
];