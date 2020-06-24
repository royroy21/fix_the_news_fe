import { connect } from 'react-redux'
import {clearUser} from "../../store/actions/user";
import {getTopics} from "../../store/actions/topics";
import {clearToken} from "../../store/actions/token";

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      clearToken: () => {
        dispatch(clearToken())
      },
      clearUser: () => {
        dispatch(clearUser())
      },
      getTopics: () => {
        dispatch(getTopics())
      },
    }
  }
};

const LogoutWrapper = connect(
  null,
  mapDispatchToProps
);

export default LogoutWrapper;
