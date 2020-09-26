import React, {Fragment} from "react";
import {makeStyles} from "@material-ui/core/styles";
import AddNewsItemButton from "../NewsItem/AddNewsItemButton";

const useStyles = makeStyles((theme) => ({
  moreNewsItems: {
    color: theme.palette.primary.dark,
    position: "absolute",
    bottom: 8,
    fontSize: 14,
    fontWeight: "bold",
    cursor: "pointer",
    paddingLeft: 10,
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
}));

const ShowMoreNewsItems = ({topic, category, showTopNewsItems, setShowTopNewsItems, user}) => {
  const numberOfShowingNewsItems = 3;

  const classes = useStyles();
  if (topic.news_items_count[category.type] <= numberOfShowingNewsItems) {
    return (
      <div style={{bottom: 0, position: "absolute"}}>
        <AddNewsItemButton
          categoryId={category.id}
          topic={topic}
          user={user}
          smallButton={true}
        />
      </div>
    )
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
          {"More"}
        </span>
      ) : (
        <span
          className={classes.moreNewsItems}
          onClick={() => setShowTopNewsItems({
            ...showTopNewsItems,
            [category.type]: false,
          })}
        >
          {`Show Less`}
        </span>
      )}
    </Fragment>
  )
};

export default ShowMoreNewsItems;
