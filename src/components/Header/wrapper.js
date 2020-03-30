import { connect } from 'react-redux'
import {clearUser} from "../../store/actions/user";

const mapStateToProps = (state) => {
  return {
    store: {
      user: state.user,
    },
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      clearUser: () => {
        dispatch(clearUser());
      },
    }
  }
};

const HeaderWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default HeaderWrapper;
