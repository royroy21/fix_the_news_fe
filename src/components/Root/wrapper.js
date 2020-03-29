import { connect } from 'react-redux'

import { updateDimensions } from '../../store/actions/appDimensions'

const mapStateToProps = (state) => {
  return {
    store: {
      appDimensions: state.appDimensions,
    },
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      updateDimensions: (data) => {
        dispatch(updateDimensions(data))
      },
    }
  }
};

const RootWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default RootWrapper;
