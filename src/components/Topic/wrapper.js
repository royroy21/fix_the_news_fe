import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    store: {
      appDimensions: state.appDimensions,
      user: state.user,
    },
  }
};

const TopicWrapper = connect(
  mapStateToProps,
);

export default TopicWrapper;
