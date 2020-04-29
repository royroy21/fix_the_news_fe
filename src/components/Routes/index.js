import React, {Fragment} from "react";
import {Route} from "react-router-dom";
import LoginModal from "../User/LoginModal";
import {
  addNewsItemRoute,
  loginRoute,
  registrationRoute,
  userNotLoggedInRoute
} from "../../settings";
import RegistrationModal from "../User/RegistrationModal";
import UserNotLoggedInModal from "../User/UserNotLoggedInModal";
import NewsItemModal from "../NewsItem/NewsItemModal";


const Routes = () => {

  return (
    <Fragment>
      <Route
        component={NewsItemModal}
        exact
        path={addNewsItemRoute}
      />
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
