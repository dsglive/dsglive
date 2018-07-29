const CustomerClients = () => import("Pages/CustomerClients.vue");
const CustomerCreateClients = () => import("Pages/CustomerCreateClients.vue");
const CustomerEditClients = () => import("Pages/CustomerEditClients.vue");

export default [
    /* Start Users Routes */
    {
        path: "/customer/:customer/clients",
        component: CustomerClients,
        name: "customer-clients",
        meta: { auth: ["admin"] },
        props: true
    },
    {
        path: "/customer/:customer/clients/create",
        component: CustomerCreateClients,
        name: "customer-clients-create",
        meta: { auth: ["admin"] },
        props: true
    },
    {
        path: "/customer/:customer/clients/:client/edit",
        component: CustomerEditClients,
        name: "customer-clients-edit",
        meta: { auth: ["admin"] },
        props: true
    }
    /* End Users Routes */
];
