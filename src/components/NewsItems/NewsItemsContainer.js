import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TopNewsItems from "./TopNewsItems";
import NewsItems from "../NewsItems";
import {newsItemsURL} from "../../settings";
import ShowMoreNewsItems from "./ShowMoreNewsItems";
import CategoryIndicator from "./CategoryIndicator";
import {categoryColourMap} from "../../theme";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    marginTop: theme.spacing(1),
  },
  newsItems: {
    paddingBottom: theme.spacing(3),
  },
  newsItemsContainer: {
    backgroundColor: theme.palette.primary.light,
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: 4,
    flex: 1,
    position: "relative",
    marginRight: theme.spacing(1),
  },
  newsItemsContent: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
}));

const NewsItemsContainer = ({topic}) => {
  const [showTopNewsItems, setShowTopNewsItems] = useState({
    for: false,
    neutral: false,
    against: false,
  });

  const getCategoryIndicatorStyle = (category) => {
    return {
      backgroundColor: categoryColourMap[category.type],
      float: "left",
      height: "100%",
      width: "1%",
    }
  };

  const classes = useStyles();
  return (
    <div className={classes.container}>
      {topic.serialized_categories.map(category => (
        <div
          className={classes.newsItemsContainer}
          key={`news-item-${category.id}`}
        >
          <div style={getCategoryIndicatorStyle(category)}
          >{""}</div>
          <div className={classes.newsItemsContent}>
            <Typography
              variant={"subtitle1"}
            >
              <CategoryIndicator category={category}/>
            </Typography>
            <div className={classes.newsItems}>
              {showTopNewsItems[category.type] ? (
                <NewsItems
                  id={`news-items-for-topic-${topic.id}-category-${[category.type]}`}
                  initialURL={`${newsItemsURL}?topic=${topic.id}&category=${[category.type]}`}
                  style={{maxHeight: 400}}
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
        </div>
        ))
      }
    </div>
  )
};

export default NewsItemsContainer;
