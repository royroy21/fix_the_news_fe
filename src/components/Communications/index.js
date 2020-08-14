import React from "react";
import CommunicationsWrapper from "./wrapper";
import UserNotLoggedInCommunications from "./UserNotLoggedInCommunications";
import UserLoggedInCommunications from "./UserLoggedInCommunications";

const Communications = ({actions, store}) => {
  const {object: user} = store.user;
  if (!user) {
    return (
      <UserNotLoggedInCommunications
        actions={actions}
        store={store}
      />
    )
  } else {
      return (
        <UserLoggedInCommunications
          actions={actions}
          store={store}
          user={user}
        />
      )
  }
}

export default CommunicationsWrapper(Communications)
