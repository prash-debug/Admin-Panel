import Tables from "layouts/tables";
import Billing from "layouts/billing";

import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Manage O3 Questions",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/o3Questions",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Manage Profile Questions",
    key: "profile",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/profileQuestions",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
];

export default routes;
