import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TopNewsItems from "./TopNewsItems";
import NewsItems from "./NewsItems";
import {newsItemsURL} from "../../settings";
import ShowMoreNewsItems from "./ShowMoreNewsItems";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    marginTop: theme.spacing(1),
  },
  newsItemContainer: {
    flex: 1,
    padding: theme.spacing(1),
    position: "relative",
  },
  newsItemsContainer: {
    paddingBottom: theme.spacing(3),
  },
  for: {
    color: "green",
  },
  neutral: {
    color: "orange",
  },
  against: {
    color: "red",
  },
}));

const NewsItemsContainer = ({topic}) => {
  const [showTopNewsItems, setShowTopNewsItems] = useState({
    for: false,
    neutral: false,
    against: false,
  });
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {topic.serialized_categories.map(category => (
        <div
          key={`news-item-${category.id}`}
          className={classes.newsItemContainer}
        >
          <Typography
            className={classes[category.type]}
            variant={"subtitle1"}
          >
            {category.title || category.type}
          </Typography>
          <hr className={classes[category.type]} />
          <div className={classes.newsItemsContainer}>
            {showTopNewsItems[category.type] ? (
              <NewsItems
                style={{
                  maxHeight: 400,
                }}
                initialURL={
                  `${newsItemsURL}?topic=${topic.id}&${[category.type]}=true`
                }
              />
            ) : (
              <TopNewsItems
                topic={topic}
                category={category}
              />
            )}
          </div>
          <ShowMoreNewsItems
            topic={topic}
            category={category}
            showTopNewsItems={showTopNewsItems}
            setShowTopNewsItems={setShowTopNewsItems}
          />
        </div>
        ))
      }
    </div>
  )
};

export default NewsItemsContainer;
