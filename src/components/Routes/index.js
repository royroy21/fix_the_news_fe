import React, {Fragment} from "react";
import {Route} from "react-router-dom";
import LoginModal from "../User/LoginModal";
import {
  loginRoute,
  registrationRoute,
  userNotLoggedInRoute
} from "../../settings";
import RegistrationModal from "../User/RegistrationModal";
import UserNotLoggedInModal from "../User/UserNotLoggedInModal";


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
      <Route
        component={UserNotLoggedInModal}
        exact
        path={userNotLoggedInRoute}
      />
    </Fragment>
  )

};

export default Routes;
