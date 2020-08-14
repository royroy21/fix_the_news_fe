import React, {Fragment, useEffect} from "react";
import Communication from "./Communication";


const UserLoggedInCommunications = ({actions, store, user}) => {
  const {
    has_viewed_welcome_communication: hasViewedWelcomeCommunication,
    has_viewed_daily_communication: hasViewedDailyCommunication,
  } = user;
  const {object: dailyCommunication} = store.dailyCommunication;
  const dailyCommunicationText = dailyCommunication
    ? dailyCommunication.text
    : null;
  useEffect(
    () => actions.getDailyCommunication(),
    [actions, dailyCommunicationText],
    )
  const {object: welcomeCommunication} = store.welcomeCommunication;
  const welcomeCommunicationText = welcomeCommunication
    ? welcomeCommunication.text
    : null;
  useEffect(
    () => actions.getWelcomeCommunication(),
    [actions, welcomeCommunicationText],
    )
  return (
    <Fragment>
    {welcomeCommunicationText && !hasViewedWelcomeCommunication ? (
      <Communication
        closeAction={() => actions.patchUser({
          has_viewed_welcome_communication: true,
        })}
        text={welcomeCommunicationText}
      />
    ) : null}
    {dailyCommunicationText && !hasViewedDailyCommunication ? (
      <Communication
        closeAction={() => actions.patchUser({
          has_viewed_daily_communication: true,
        })}
        text={dailyCommunicationText}
      />
    ) : null}
    </Fragment>
  )
}

export default UserLoggedInCommunications;
