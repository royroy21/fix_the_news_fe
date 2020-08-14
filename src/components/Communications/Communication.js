import Paper from "@material-ui/core/Paper";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import CloseButton from "../CustomButton/CloseButton";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(1),
  },
  text: {
    textAlign: 'center',
    margin: theme.spacing(1),
  },
  textContainer: {
    display: 'grid',
    gridTemplateColumns: '97% 3%',
    margin: theme.spacing(1),
    position: 'relative',
  },
}));

const Communication = ({text, closeAction}) => {
  const [isClosed, setIsClosed] = useState(false)
  const closeCommunication = closeAction
    ? () => {setIsClosed(true); closeAction()}
    : setIsClosed;
  const classes = useStyles();
  if (isClosed) {
    return null;
  }
  return (
    <Paper
      children={
        <div className={classes.textContainer}>
          <p className={classes.text}>{text}</p>
          <CloseButton
            onClick={closeCommunication}
            style={{
              padding: 0,
              position: 'absolute',
              top: 0,
              right: 0,
            }}
            overwriteStyle={true}
          />
        </div>
      }
      className={classes.paper}
      elevation={1}
    />
  )
}

export default Communication;
