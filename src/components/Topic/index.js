import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import NewsItemsContainer from "../NewsItems/NewsItemsContainer";
import ButtonLink from "../Button/ButtonLink";
import {
  addNewsItemRoute,
  userNotLoggedInRoute
} from "../../settings";
import share from '../../images/share.svg';
import addArticle from '../../images/addArticle.svg';
import TopicWrapper from "./wrapper";

const useStyles = makeStyles((theme) => ({
  buttonLinkContainer: {
    display: "flex",
    flexDirection: "row",
    marginRight: theme.spacing(2),
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
  root: {
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
    <div className={classes.root}>
      <div className={classes.headerContainer}>
        <Typography
          className={classes.title}
          variant={"h6"}
        >
          {item.title}
        </Typography>
        <div className={classes.buttonLinkContainer}>
          <div style={{marginRight: 5}}>
            <ButtonLink
              icon={<img src={share} alt="??" />}
              inverted={true}
              to={""} // TODO - to share topic ??
            />
          </div>
          {!store.user.object ? (
            <ButtonLink
              icon={<img src={addArticle} alt="??" />}
              label={"Add Article"}
              to={userNotLoggedInRoute}
            />
          ) : (
            <ButtonLink
              icon={<img src={addArticle} alt="??" />}
              label={"Add Article"}
              to={addNewsItemRoute}
              state={{
                categories: item.serialized_categories,
                topicId: item.id,
              }}
            />
          )}
        </div>
      </div>
      <NewsItemsContainer topic={item} />
    </div>
  )
};

export default TopicWrapper(Topic);
