import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import NewsItemsContainer from "../NewsItems/NewsItemsContainer";
import ButtonLink from "../CustomButton/ButtonLink";
import {
  addNewsItemRoute,
  userNotLoggedInRoute
} from "../../settings";
import TopicWrapper from "./wrapper";
import MobileNewsItemsContainer from "../NewsItems/MobileNewsItemsContainer";
import CommentsButton from "../Comments/CommentsButton";
import AddIcon from '@material-ui/icons/Add';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles((theme) => ({
  buttonLinkContainer: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    right: 0,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    position: "relative",
    width: "100%",
  },
  root: {
    marginTop: theme.spacing(2),
  },
  title: {
    fontWeight: "bold",
    paddingLeft: theme.spacing(1),
    width: "55%",
  }
}));

const Topic = ({item, store}) => {
  const classes = useStyles();
  const isMobile = store.appDimensions.isMobile;
  if (isMobile === null) {
    return null;
  }
  return (
    <div className={classes.root}>
      <div
        className={classes.headerContainer}
        style={!isMobile ? {paddingBottom: 5} : undefined}
      >
        <Typography
          className={classes.title}
          variant={"h6"}
        >
          {item.title}
        </Typography>
        <div
          className={classes.buttonLinkContainer}
          style={store.appDimensions.isMobile ? {marginRight: 10} : undefined}
        >
          <div style={{marginRight: 5}}>
            <ButtonLink
              icon={<ShareIcon />}
              inverted={true}
              to={""} // TODO - to share topic ??
            />
          </div>
          {!store.user.object ? (
            <ButtonLink
              icon={<AddIcon />}
              label={!isMobile ? "Add Article" : null}
              to={userNotLoggedInRoute}
            />
          ) : (
            <ButtonLink
              icon={<AddIcon />}
              label={!isMobile ? "Add Article" : null}
              to={addNewsItemRoute}
              state={{
                categories: item.serialized_categories,
                topicId: item.id,
              }}
            />
          )}
        </div>
      </div>
      {isMobile ? (
        <MobileNewsItemsContainer topic={item} />
        ) : (
        <NewsItemsContainer topic={item} />
      )}
      <CommentsButton
        commentsCount={item.comments_count}
        topicId={item.id}
      />
    </div>
  )
};

export default TopicWrapper(Topic);
