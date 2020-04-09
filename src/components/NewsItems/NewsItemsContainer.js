import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import NewsItem from "../NewsItem";
import {capitalizeFirstLetter} from "../../helpers/stringFunctions";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    marginTop: theme.spacing(1),
  },
  moreNewsItems: {
    position: "absolute",
    bottom: 0,
    fontWeight: "bold",
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
            {capitalizeFirstLetter(category.title || category.type)}
          </Typography>
          <hr className={classes[category.type]} />
          <div className={classes.newsItemsContainer}>
            {topic.top_news_items[category.type].map(newsItem => (
              <NewsItem
                key={`news-item-${newsItem.id}`}
                newsItem={newsItem}
              />
              ))
            }
          </div>
          {topic.news_items_count[category.type] > 3 ? (
            <p className={classes.moreNewsItems}>
              {`show ${topic.news_items_count[category.type]} more`}
            </p>
          ) : null}
        </div>
        ))
      }
    </div>
  )
};

export default NewsItemsContainer;
