import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import NewsItemsContainer from "../NewsItems/NewsItemsContainer";
import ButtonLink from "../Button/ButtonLink";
import {loginRoute, userNotLoggedInRoute} from "../../settings";
import AddIcon from '@material-ui/icons/Add';
import TopicWrapper from "./wrapper";

const useStyles = makeStyles((theme) => ({
  buttonLinkContainer: {
    position: "absolute",
    right: 0,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    position: "relative"
  },
  paper: {
    padding: theme.spacing(1),
  },
  title: {
    fontWeight: "bold",
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(1),
  }
}));

const Topic = ({item, store}) => {
  const classes = useStyles();
  return (
    <Paper
      className={classes.paper}
      elevation={3}
    >
      <div className={classes.headerContainer}>
        <Typography
          className={classes.title}
          variant={"h6"}
        >
          {item.title}
        </Typography>
        <div className={classes.buttonLinkContainer}>
          {!store.user.object ? (
            <ButtonLink
              label={<AddIcon />}
              path={userNotLoggedInRoute}
              withDefaultWidth={false}
            />
          ) : (
            <ButtonLink
              label={<AddIcon />}
              path={loginRoute} // this to change
              withDefaultWidth={false}
            />
          )}
        </div>
      </div>
      <NewsItemsContainer topic={item} />
    </Paper>
  )
};

export default TopicWrapper(Topic);
