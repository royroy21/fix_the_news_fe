import React, {Component} from "react";
import Typography from "@material-ui/core/Typography";
import Link from '@material-ui/core/Link';
import Chip from "@material-ui/core/Chip";
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import {withStyles} from "@material-ui/core";
import NewsItemWrapper from "./wrapper";

const styles = (theme) => ({
  chip: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.commentsGrey,
    cursor: "pointer",
    padding: "10px 5px 10px 5px",
    "&:hover": {
      color: theme.palette.secondary.main
    },
  },
  chipContainer: {
    bottom: 5,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    position: "absolute",
    width: "100%",
  },
  link: {
    color: "black",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
  mainContainer: {
    backgroundColor: theme.palette.primary.light,
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: 4,
    height: 110,
    padding: theme.spacing(1),
    position: "relative",
  },
  title: {
    color: theme.palette.primary.contrastText,
    fontWeight: 500,
    lineHeight: "18px",
    overflow: "hidden",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
  thumbsUpCount: {
    float: "right",
    fontSize: "0.8em",
    marginLeft: theme.spacing(0.5),
    marginTop: 5,
  },
  thumbsUpIcon: {
    color: theme.palette.primary.dark,
    marginLeft: theme.spacing(1),
  },
});

class NewsItem extends Component {
  LINE_LIMIT = 50;

  contentRef = React.createRef();

  state = {
    overflowActive: false,
  };

  isOverflowActive(e) {
    return e.current.offsetHeight < e.current.scrollHeight;
  }

  componentDidMount() {
    this.setState({
      overflowActive: this.isOverflowActive(this.contentRef),
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.isOverflowActive(this.contentRef) !== prevState.overflowActive) {
      this.setState({
        overflowActive: this.isOverflowActive(this.contentRef),
      });
    }
  }

  render() {
    const { classes, item, store} = this.props;
    const {isMobile, width: screenWidth} = store.appDimensions;
    if (isMobile === null) {
      return null;
    }
    const extraContainerStyle = isMobile
      ? {
        marginRight: 10,
        minWidth: screenWidth - 100,
        maxWidth: screenWidth - 100,
      }
      : {
        minWidth: 150,
        maxWidth: 430,
        marginBottom: 10,
      };
    return (
      <div
        className={classes.mainContainer}
        style={extraContainerStyle}
      >
        <Link
          className={classes.link}
          href={item.url}
          rel={"noreferrer"}
          target={"_blank"}
          underline={"none"}
        >
          <Typography variant={"subtitle2"}>
            <div
              className={classes.title}
              ref={this.contentRef}
            >
              {this.state.overflowActive ?
                item.title.slice(0, this.LINE_LIMIT) + "..."
                : item.title}
            </div>
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
              label={item.news_source}
            />
          </Link>
          <div>
            <ThumbUpAltOutlinedIcon
              className={classes.thumbsUpIcon}
            />
            <div className={classes.thumbsUpCount}>{"99"}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(NewsItemWrapper(NewsItem));
