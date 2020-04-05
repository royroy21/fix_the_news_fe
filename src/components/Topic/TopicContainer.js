import React, {Component} from 'react';
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import NewsItemsContainer from "../NewsItems/NewsItemsContainer";

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
  },
  title: {
    fontWeight: "bold",
  }
});

class TopicContainer extends Component {

  render() {
    const { classes } = this.props;
    return (
      <Paper
        className={classes.paper}
        elevation={3}
      >
        <Typography
          className={classes.title}
          variant={"h6"}
        >
          {this.props.topic.title}
        </Typography>
        <NewsItemsContainer topic={this.props.topic} />
      </Paper>
    )
  }
}

export default withStyles(styles)(TopicContainer);

TopicContainer.propTypes = {
  topic: PropTypes.object.isRequired,
};
