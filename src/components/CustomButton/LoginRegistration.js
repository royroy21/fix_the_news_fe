import React from "react";
import LoginButton from "./LoginButton";
import {loginRoute, registrationRoute} from "../../settings";
import ButtonLink from "./ButtonLink";
import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  buttonDivider: {
    color: theme.palette.primary.main,
    marginLeft: 10,
    marginRight: 10,
  },
  container: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

const LoginRegistration = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <LoginButton to={loginRoute}/>
      <span className={classes.buttonDivider}>{"/"}</span>
      <ButtonLink
        to={registrationRoute}
        label={"Sign Up"}
        inverted={true}
        style={{width: 100}}
      />
    </div>
  )
};

export default LoginRegistration;
