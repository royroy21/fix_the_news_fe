import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    store: {
      user: state.user,
    },
  }
};

const TopicWrapper = connect(
  mapStateToProps,
);

export default TopicWrapper;
