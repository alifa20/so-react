import React from "react";
import AddPerson from "../components/AddPerson";
import * as actions from "../actions/personActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class AddPersonContainer extends React.Component {
  // constructor(props) {
  //     super(props);
  // }

  render = () => {
    return <AddPerson handleAddPerson={this.props.actions.addPerson} />;
  };

  // handleAddNewPerson = (firstName, lastName, occupation) => {
  //   let action = actions.addPerson(firstName, lastName, occupation);
  //   this.props.store.dispatch(action);
  // };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

// export default AddPersonContainer;
export default connect(null, mapDispatchToProps)(AddPersonContainer);
