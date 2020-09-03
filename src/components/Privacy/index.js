import React, {Fragment, useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import PrivacyWrapper from "./wrapper";

const useStyles = makeStyles((theme) => ({
  text: {
    textAlign: 'center',
    margin: theme.spacing(1),
  },
  title: {
    textAlign: 'center',
    margin: theme.spacing(1),
  },
}));

const Privacy = ({actions, store}) => {
  const classes = useStyles();
  const {
    id: privacyId,
    text: privacyText,
    title: privacyTitle,
  } = store.privacyCommunication.object || {};
  useEffect(
    () => actions.getPrivacyCommunication(),
    [actions, privacyId],
    )
  const {
    id: termsAndConditionsId,
    text: termsAndConditionsText,
    title: termsAndConditionsTitle,
  } = store.termsAndConditionsCommunication.object || {};
  useEffect(
    () => actions.getTermsAndConditionsCommunication(),
    [actions, termsAndConditionsId],
    )
  return (
    <Fragment>
      <br /><br />
      <h3 className={classes.title}>{privacyTitle}</h3><br />
      <p className={classes.text}>{privacyText}</p>
      <br /><br />
      <h3 className={classes.title}>{termsAndConditionsTitle}</h3><br />
      <p className={classes.text}>{termsAndConditionsText}</p>
    </Fragment>
  )
}

export default PrivacyWrapper(Privacy);
