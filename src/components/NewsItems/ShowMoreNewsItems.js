import React, {Fragment} from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  moreNewsItems: {
    position: "absolute",
    bottom: 0,
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "blue"
    },
  },
}));

const ShowMoreNewsItems = ({topic, category, showTopNewsItems, setShowTopNewsItems}) => {
  const classes = useStyles();
  if (topic.news_items_count[category.type] < 3) {
    return null;
  }
  return (
    <Fragment>
      {!showTopNewsItems[category.type] ? (
        <p
          className={classes.moreNewsItems}
          onClick={() => setShowTopNewsItems({
            ...showTopNewsItems,
            [category.type]: true,
          })}
        >
          {`show ${topic.news_items_count[category.type]} more`}
        </p>
      ) : (
        <p
          className={classes.moreNewsItems}
          onClick={() => setShowTopNewsItems({
            ...showTopNewsItems,
            [category.type]: false,
          })}
        >
          {`show less`}
        </p>
      )}
    </Fragment>
  )
};

export default ShowMoreNewsItems;
