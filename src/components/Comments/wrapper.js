import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    store: {
      appDimensions: state.appDimensions,
    },
  }
};


const CommentsWrapper = connect(
  mapStateToProps,
);

export default CommentsWrapper;
