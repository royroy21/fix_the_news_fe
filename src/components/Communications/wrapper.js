import { connect } from 'react-redux'

import { patchUser } from "../../store/actions/user";
import {getDailyCommunication} from "../../store/actions/dailyCommunication";
import {getWelcomeCommunication} from "../../store/actions/welcomeCommunication";

const mapStateToProps = (state) => {
  return {
    store: {
      dailyCommunication: state.dailyCommunication,
      user: state.user,
      welcomeCommunication: state.welcomeCommunication,
    },
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getDailyCommunication: () => {
        dispatch(getDailyCommunication());
      },
      getWelcomeCommunication: () => {
        dispatch(getWelcomeCommunication());
      },
      patchUser: data => {
        dispatch(patchUser(data));
      },
    }
  }
};

const CommunicationsWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default CommunicationsWrapper;
