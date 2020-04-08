import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import NewsItem from "../NewsItem";
import {capitalizeFirstLetter} from "../../helpers/stringFunctions";

const useStyles = makeStyles((theme) => ({
  newsItemsContainer: {
    display: "flex",
    marginTop: theme.spacing(1),
  },
  newsItemContainer: {
    flex: 1,
    padding: theme.spacing(1),
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
  const classes = useStyles();
  return (
    <div className={classes.newsItemsContainer}>
      {topic.serialized_categories.map(category => (
        <div
          key={`news-item-${category.id}`}
          className={classes.newsItemContainer}
        >
          <Typography
            className={classes[category.type]}
            variant={"subtitle1"}
          >
            {capitalizeFirstLetter(category.title || category.type)}
          </Typography>
          <hr className={classes[category.type]} />
          <div>
            {topic.top_news_items[category.type].map(newsItem => (
              <NewsItem
                key={`news-item-${newsItem.id}`}
                newsItem={newsItem}
              />
              ))
            }
          </div>
        </div>
        ))
      }
    </div>
  )
};

export default NewsItemsContainer;
