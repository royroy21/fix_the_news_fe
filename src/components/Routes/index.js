import React, {Fragment} from "react";
import {Route} from "react-router-dom";
import LoginModal from "../User/LoginModal";
import {loginRoute, registrationRoute} from "../../settings";
import RegistrationModal from "../User/RegistrationModal";


const Routes = () => {

  return (
    <Fragment>
      <Route
        component={LoginModal}
        exact
        path={loginRoute}
      />
      <Route
        component={RegistrationModal}
        exact
        path={registrationRoute}
      />
    </Fragment>
  )

};

export default Routes;
