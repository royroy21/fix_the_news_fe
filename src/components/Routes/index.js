import React, {Fragment} from "react";
import {Route} from "react-router-dom";
import LoginModal from "../User/LoginModal";
import {
  addNewsItemRoute,
  loginRoute,
  mobileMainMenuRoute,
  registrationRoute,
  userNotLoggedInRoute
} from "../../settings";
import RegistrationModal from "../User/RegistrationModal";
import UserNotLoggedInModal from "../User/UserNotLoggedInModal";
import NewsItemModal from "../NewsItem/NewsItemModal";
import MobileMainMenu from "../MobileMainMenu";


const Routes = () => {

  return (
    <Fragment>
      <Route
        component={LoginModal}
        exact
        path={loginRoute}
      />
      <Route
        component={MobileMainMenu}
        exact
        path={mobileMainMenuRoute}
      />
      <Route
        component={NewsItemModal}
        exact
        path={addNewsItemRoute}
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
