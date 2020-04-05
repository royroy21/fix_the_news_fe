import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: theme.spacing(2),
  },
}));

const NewsItem = ({newsItem}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant={"subtitle2"}>
        {newsItem.title}
      </Typography>
    </div>
  )
};

export default NewsItem;
