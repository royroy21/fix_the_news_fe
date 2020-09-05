import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import NewsItemsContainer from "../NewsItems/NewsItemsContainer";
import TopicWrapper from "./wrapper";
import MobileNewsItemsContainer from "../NewsItems/MobileNewsItemsContainer";
import CommentsButton from "../Comments/CommentsButton";
import AddIcon from '@material-ui/icons/Add';
import ShareIcon from '@material-ui/icons/Share';
import ButtonForModal from "../CustomButton/ButtonForModal";
import ShareTopicModal from "../ShareTopic/ShareTopicModal";
import UserNotLoggedInModal from "../User/UserNotLoggedInModal";
import NewsItemModal from "../NewsItem/NewsItemModal";

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
    top: "-5px",
  },
  root: {
    marginTop: theme.spacing(2),
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
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
  return (
    <div className={classes.root}>
      <div
        className={classes.headerContainer}
        style={!isMobile ? {paddingBottom: 5} : undefined}
      >
        <Typography
          className={classes.title}
          variant={"h2"}
        >
          {item.title}
        </Typography>
        <div
          className={classes.buttonLinkContainer}
          style={store.appDimensions.isMobile ? {marginRight: 10} : undefined}
        >
          <ButtonForModal
            icon={<ShareIcon />}
            inverted={true}
            Modal={ShareTopicModal}
            modelProps={{slug: item.slug}}
          />
          {!store.user.object ? (
            <ButtonForModal
              icon={<AddIcon fontSize={'large'} />}
              label={!isMobile ? "Add News" : null}
              Modal={UserNotLoggedInModal}
            />
          ) : (
            <ButtonForModal
              icon={<AddIcon fontSize={'large'} />}
              label={!isMobile ? "Add News" : null}
              Modal={NewsItemModal}
              modelProps={{
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
