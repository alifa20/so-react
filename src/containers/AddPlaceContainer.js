import React from "react";
import AddPlace from "../components/AddPlace";
import * as actions from "../actions/placeActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class AddPlaceContainer extends React.Component {
  handleAddPlace = placeName => {
    const action = actions.addPlace(placeName);
    this.props.store.dispatch(action);
  };

  render = () => {
    return <AddPlace handleAddPlace={this.props.actions.addPlace} />;
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

// export default AddPlaceContainer;
export default connect(null, mapDispatchToProps)(AddPlaceContainer);
