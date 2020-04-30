import React, {Component} from "react";
import Typography from "@material-ui/core/Typography";
import Link from '@material-ui/core/Link';
import Chip from "@material-ui/core/Chip";
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import {withStyles} from "@material-ui/core";

const styles = (theme) => ({
  chip: {
    cursor: "pointer",
    "&:hover": {
      color: "blue"
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
      color: "blue"
    },
  },
  mainContainer: {
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: 4,
    height: 110,
    marginBottom: theme.spacing(2),
    minWidth: 150,
    maxWidth: 330,
    padding: theme.spacing(1),
    position: "relative",
  },
  title: {
    height: 65,
    overflow: "hidden",
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
      this.setState({ overflowActive: this.isOverflowActive(this.contentRef) });
    }
  }

  render() {
    const { classes, item } = this.props;
    return (
      <div className={classes.mainContainer}>
        <Link
          className={classes.link}
          href={item.url}
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
          <ThumbUpAltOutlinedIcon
            className={classes.thumbsUpIcon}
          />
          <span className={classes.thumbsUpCount}>{"99"}</span>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(NewsItem);
