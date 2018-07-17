const Bin = () => import("Pages/Reports/Bin.vue");
const Client = () => import("Pages/Reports/Client.vue");
const Customer = () => import("Pages/Reports/Customer.vue");
const Damaged = () => import("Pages/Reports/Damaged.vue");
const Unknown = () => import("Pages/Reports/Unknown.vue");
const ViewDamaged = () => import("Pages/Reports/ViewDamaged.vue");
const EditUnknown = () => import("Pages/Reports/EditUnknown.vue");
const EditPackage = () => import("Pages/Reports/EditPackage.vue");
const ViewPackage = () => import("Pages/Reports/ViewPackage.vue");
export default [
  /* Start Users Routes */
  {
    path: "/reports/bin",
    component: Bin,
    name: "bin-reports",
    meta: { auth: ["admin"] }
  },
  {
    path: "/reports/clients",
    component: Client,
    name: "client-reports",
    meta: { auth: ["admin"] }
  },
  {
    path: "/reports/customer",
    component: Customer,
    name: "customer-reports",
    meta: { auth: ["admin"] }
  },
  {
    path: "/reports/unknown",
    component: Unknown,
    name: "unknown-reports",
    meta: { auth: ["admin"] }
  },
  {
    path: "/reports/unknown/dsg/:id",
    component: EditUnknown,
    name: "edit-unknown-reports",
    meta: { auth: ["admin"] },
    props: true
  },
  // damage reports
  {
    path: "/reports/damaged",
    component: Damaged,
    name: "damaged-reports",
    meta: { auth: ["admin"] }
  },
  {
    path: "/reports/damaged/dsg/:id/edit",
    component: EditPackage,
    name: "edit-damaged-package",
    meta: { auth: ["admin"] },
    props: true
  },
  {
    path: "/reports/damaged/package/:id/view",
    component: ViewPackage,
    name: "view-damaged-package",
    meta: { auth: ["admin"] },
    props: true
  }
  /* End Users Routes */
];
