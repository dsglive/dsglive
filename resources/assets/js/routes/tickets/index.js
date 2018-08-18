const Tickets = () => import("Pages/Tickets/Index.vue");
const CreateTicket = () => import("Pages/Tickets/CreateTicket.vue");
const EditTicket = () => import("Pages/Tickets/EditTicket.vue");

export default [
  /* Start Logistics Routes */
  {
    path: "/tickets",
        component: Tickets,
    name: "tickets",
    meta: { auth: ["admin"] }
  },
  {
      path: "/tickets/create-ticket",
      component: CreateTicket,
      name: "create-ticket",
    meta: { auth: ["admin"] }
  },
  {
      path: "/tickets/edit-ticket/:id",
      component: EditTicket,
      name: "edit-ticket",
    meta: { auth: ["admin"] },
    props: true
  }
  /* End Logistics Routes */
];
