const Payments = () => import("Pages/Payment/Index.vue");
const CreatePayment = () => import("Pages/Payment/CreatePayment.vue");
const EditPayment = () => import("Pages/Payment/EditPayment.vue");

export default [
    /* Start Users Routes */
    {
        path: "/payments",
        component: Payments,
        name: "payments",
        meta: { auth: ["admin"] }
    },
    {
        path: "/payments/create",
        component: CreatePayment,
        name: "create-payment",
        meta: { auth: ["admin"] }
    },
    {
        path: "/payments/:id",
        component: EditPayment,
        name: "edit-payment",
        meta: { auth: ["admin"] },
        props: true
    }
    /* End Users Routes */
];
