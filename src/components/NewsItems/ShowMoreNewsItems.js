import React, {Fragment} from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  moreNewsItems: {
    color: theme.palette.secondary.main,
    position: "absolute",
    bottom: 0,
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.secondary.light,
    },
  },
}));

const ShowMoreNewsItems = ({topic, category, showTopNewsItems, setShowTopNewsItems}) => {
  const numberOfShowingNewsItems = 3;

  const classes = useStyles();
  if (topic.news_items_count[category.type] <= numberOfShowingNewsItems) {
    return null;
  }
  return (
    <Fragment>
      {!showTopNewsItems[category.type] ? (
        <span
          className={classes.moreNewsItems}
          onClick={() => setShowTopNewsItems({
            ...showTopNewsItems,
            [category.type]: true,
          })}
        >
          {`show ${topic.news_items_count[category.type] - numberOfShowingNewsItems} more`}
        </span>
      ) : (
        <span
          className={classes.moreNewsItems}
          onClick={() => setShowTopNewsItems({
            ...showTopNewsItems,
            [category.type]: false,
          })}
        >
          {`show less`}
        </span>
      )}
    </Fragment>
  )
};

export default ShowMoreNewsItems;
