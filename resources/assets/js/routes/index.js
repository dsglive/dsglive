import auth from "Routes/auth";
import home from "Routes/home";
import profile from "Routes/profile";
import clients from "Routes/clients";
import users from "Routes/users";
import shippers from "Routes/shippers";
import rates from "Routes/rates";
import bins from "Routes/bins";
import errors from "Routes/errors";
import dsg from "Routes/dsg"

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
  dsg
  /* add here Other Routes File */
);
export default routes;
