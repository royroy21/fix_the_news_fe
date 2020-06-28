import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    store: {
      user: state.user,
    },
  }
};


const MobileMainMenuWrapper = connect(
  mapStateToProps,
);

export default MobileMainMenuWrapper;
