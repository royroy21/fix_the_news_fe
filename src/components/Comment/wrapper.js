import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    store: {
      appDimensions: state.appDimensions,
    },
  }
};


const CommentWrapper = connect(
  mapStateToProps,
);

export default CommentWrapper;
