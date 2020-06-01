import React from "react";
import NeverEndingScrolling from "../NeverEndingScrolling";
import {initialCommentCommentsState} from "../../store/reducers/commentComments";
import Comment from '../Comment';

const NestedComments = ({actions, item, store}) => {
  return (
    <NeverEndingScrolling
      getInitialRequest={() => actions.getCommentComments({comment: item.id})}
      getNext={actions.getCommentComments}
      id={`comments-for-comment-${item.id}`}
      ItemComponent={Comment}
      store={store.commentComments[item.id] || initialCommentCommentsState}
      style={{maxHeight: 400}}
      showLoadingAtFirstLoad={false}
    />
  )
};

export default NestedComments;
