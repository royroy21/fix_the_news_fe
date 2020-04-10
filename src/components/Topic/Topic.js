import React, {Component} from 'react';
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import NewsItemsContainer from "../NewsItems/NewsItemsContainer";
import ButtonLink from "../Button/ButtonLink";
import {loginRoute} from "../../settings";
import AddIcon from '@material-ui/icons/Add';

const styles = (theme) => ({
  buttonLinkContainer: {
    position: "absolute",
    right: 0,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    position: "relative"
  },
  paper: {
    padding: theme.spacing(1),
  },
  title: {
    fontWeight: "bold",
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(1),
  }
});

class Topic extends Component {

  render() {
    const { classes } = this.props;
    return (
      <Paper
        className={classes.paper}
        elevation={3}
      >
        <div className={classes.headerContainer}>
          <Typography
            className={classes.title}
            variant={"h6"}
          >
            {this.props.item.title}
          </Typography>
          <div className={classes.buttonLinkContainer}>
            <ButtonLink
              label={<AddIcon />}
              path={loginRoute}
              withDefaultWidth={false}
            />
          </div>
        </div>
        <NewsItemsContainer topic={this.props.item} />
      </Paper>
    )
  }
}

export default withStyles(styles)(Topic);

Topic.propTypes = {
  item: PropTypes.object.isRequired,
};
