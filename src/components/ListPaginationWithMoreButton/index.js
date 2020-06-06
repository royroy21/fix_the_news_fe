import React, {Fragment, useEffect} from "react";
import LoadingSpinner from "../Loading/LoadingSpinner";
import {parseURL} from "../../helpers/urlFunctions";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  more: {
    color: theme.palette.secondary.main,
    cursor: 'pointer',
    textAlign: 'center',
    fontWeight: 'bold',
    '&:hover': {
      color: theme.palette.secondary.light,
    },
  },
}));

const ListPaginationWithMoreButton = (props) => {
  const {
    ItemComponent,
    pageSize=5,
    request,
    requestParamName,
    requestParamValue,
    store,
  } = props;

  const classes = useStyles();

  useEffect(
    () => {request({
      [requestParamName]: requestParamValue,
      size: pageSize,
    })},
    [
      pageSize,
      request,
      requestParamName,
      requestParamValue,
    ],
  );

  const getNextURL = () => {
    if (!store.loading) {
      const {next: nextURL} = store.objects || {};
      return nextURL;
    }
  };

  const getNextItems = () => {
    const nextURL = getNextURL();
    if (nextURL) {
      const {params} = parseURL(nextURL);
      request(params);
    }
  };

  return (
    <Fragment>
      {store.items.map(item => (<ItemComponent
        key={`item-component-${item.id}`}
        item={item}
      />))}
      {store.loading && <LoadingSpinner />}
      {getNextURL() ? (
        <div className={classes.more} onClick={getNextItems}>{"more"}</div>
      ) : null}
    </Fragment>
  )
};

export default ListPaginationWithMoreButton;
