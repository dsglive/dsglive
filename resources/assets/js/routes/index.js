import auth from "Routes/auth";
import home from "Routes/home";
import profile from "Routes/profile";
import clients from "Routes/clients";
import users from "Routes/users";
import customer from "Routes/customer";
import shippers from "Routes/shippers";
import rates from "Routes/rates";
import bins from "Routes/bins";
import errors from "Routes/errors";
import dsg from "Routes/dsg";
import tickets from "Routes/tickets";
import warehouse from "Routes/warehouse";
import misc from "Routes/misc";
import invoices from "Routes/invoices";
import reports from "Routes/reports";

let routeFiles = [];
/* Multi Route Files */
const routes = routeFiles.concat(
  auth,
  home,
  profile,
  errors,
  clients,
  users,
  shippers,
  rates,
  bins,
  dsg,
    tickets,
  warehouse,
  misc,
  invoices,
  reports,
  customer
  /* add here Other Routes File */
);
export default routes;
