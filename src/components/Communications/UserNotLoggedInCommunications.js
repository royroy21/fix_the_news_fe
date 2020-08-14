import React, {useEffect} from "react";
import Communication from "./Communication";


const UserNotLoggedInCommunications = ({actions, store}) => {
  const {object: dailyCommunication} = store.dailyCommunication;
  const dailyCommunicationText = dailyCommunication ? dailyCommunication.text : null;
  useEffect(
    () => actions.getDailyCommunication(),
    [actions, dailyCommunicationText],
    )
  if (!dailyCommunication) {
    return null;
  }
  return (
    <Communication text={dailyCommunicationText}/>
  )
}

export default UserNotLoggedInCommunications;
