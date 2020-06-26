import React, {Fragment} from "react";
import {Route} from "react-router-dom";
import LoginModal from "../User/LoginModal";
import {
  addNewsItemRoute,
  loginRoute,
  mobileMainMenuRoute,
  registrationRoute,
  shareTopicRoute,
  topicRoute,
  userNotLoggedInRoute
} from "../../settings";
import RegistrationModal from "../User/RegistrationModal";
import UserNotLoggedInModal from "../User/UserNotLoggedInModal";
import NewsItemModal from "../NewsItem/NewsItemModal";
import MobileMainMenu from "../MobileMainMenu";
import TopicPage from "../TopicPage";
import ShareTopicModal from "../ShareTopic/ShareTopicModal";


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
        component={ShareTopicModal}
        path={shareTopicRoute}
      />
      <Route
        component={TopicPage}
        path={topicRoute}
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
