import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from '@material-ui/core/Link';
import Chip from "@material-ui/core/Chip";
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';

const useStyles = makeStyles((theme) => ({
  chip: {
    cursor: "pointer",
    "&:hover": {
      color: "blue"
    },
  },
  chipContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  link: {
    color: "black",
    "&:hover": {
      color: "blue"
    },
  },
  mainContainer: {
    marginBottom: theme.spacing(2),
  },
  thumbsUpCount: {
    fontSize: "0.8em",
    marginTop: 5,
    marginLeft: theme.spacing(0.5),
  },
  thumbsUpIcon: {
    color: "grey",
    marginLeft: theme.spacing(1),
  },
}));

const NewsItem = ({item}) => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <Link
        className={classes.link}
        href={item.url}
        target={"_blank"}
        underline={"none"}
      >
        <Typography variant={"subtitle2"}>
          {item.title}
        </Typography>
      </Link>
      <div className={classes.chipContainer}>
        <Link
          className={classes.link}
          href={item.url}
          target={"_blank"}
          underline={"none"}
        >
          <Chip
            className={classes.chip}
            size={"small"}
            label={item.serialized_type.title}
          />
        </Link>
        <ThumbUpAltOutlinedIcon
          className={classes.thumbsUpIcon}
        />
        <span className={classes.thumbsUpCount}>{"99"}</span>
      </div>
    </div>
  )
};

export default NewsItem;
