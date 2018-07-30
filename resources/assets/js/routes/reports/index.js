const Bin = () => import("Pages/Reports/Bin.vue");
const Client = () => import("Pages/Reports/Client.vue");
const Customer = () => import("Pages/Reports/Customer.vue");
const AllUnknownReport = () => import("Pages/Reports/AllUnknownReport.vue");
const UnknownCustomer = () => import("Pages/Reports/UnknownCustomer.vue");
const UnknownClient = () => import("Pages/Reports/UnknownClient.vue");
const UnknownShipper = () => import("Pages/Reports/UnknownShipper.vue");
const DamagedPackages = () => import("Pages/Reports/DamagedPackages.vue");
const RepairedPackages = () => import("Pages/Reports/RepairedPackages.vue");
const UndeliveredPackages = () => import("Pages/Reports/UndeliveredPackages.vue");
const EditUnknown = () => import("Pages/Reports/EditUnknown.vue");
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
    path: "/reports/all-unknown-report",
    component: AllUnknownReport,
    name: "unknown-reports",
    meta: { auth: ["admin"] }
  },
  {
    path: "/reports/unknown-customer",
    component: UnknownCustomer,
    name: "unknown-customer",
    meta: { auth: ["admin", "customer", "warehouse"] }
  },
  {
    path: "/reports/unknown-client",
    component: UnknownClient,
    name: "unknown-client",
    meta: { auth: ["admin", "customer", "warehouse"] }
  },
  {
    path: "/reports/unknown-shipper",
    component: UnknownShipper,
    name: "unknown-shipper",
    meta: { auth: ["admin", "customer", "warehouse"] }
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
    component: DamagedPackages,
    name: "damaged-reports",
    meta: { auth: ["admin", "warehouse", "customer"] }
  },
  {
    path: "/reports/repaired",
    component: RepairedPackages,
    name: "repaired-reports",
    meta: { auth: ["admin", "warehouse", "customer"] }
  },
  {
    path: "/reports/undelivered",
    component: UndeliveredPackages,
    name: "undelivered-reports",
    meta: { auth: ["admin", "warehouse", "customer"] }
  },
  {
    path: "/reports/package/:id/view",
    component: ViewPackage,
    name: "view-package",
    meta: { auth: ["admin", "warehouse", "customer"] },
    props: true
  }

  /* End Users Routes */
];
