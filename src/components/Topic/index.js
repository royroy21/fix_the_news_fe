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
import MobileNewsItemsContainer from "../NewsItems/MobileNewsItemsContainer";
import {themeObject} from "../../theme";
import CommentsButton from "../Comments/CommentsButton";

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
    width: "65%",
  }
}));

const Topic = ({item, store}) => {
  const classes = useStyles();
  const isMobile = store.appDimensions.isMobile;
  if (isMobile === null) {
    return null;
  }
  const extraRootStyle = isMobile
    ? {borderBottom: `1px solid ${themeObject.palette.primary.main}`}
    : null;
  return (
    <div
      className={classes.root}
      style={extraRootStyle}
    >
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
              label={!isMobile ? "Add Article" : null}
              to={userNotLoggedInRoute}
            />
          ) : (
            <ButtonLink
              icon={<img src={addArticle} alt="??" />}
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
