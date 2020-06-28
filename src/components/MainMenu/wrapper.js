import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    store: {
      user: state.user,
    },
  }
};


const MainMenuWrapper = connect(
  mapStateToProps,
);

export default MainMenuWrapper;
