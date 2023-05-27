import { connect } from "react-redux";
import TotalItems from "../Components/TotalItemAdded";

//   Note -

//  Here we are not performing any actions, we just want to get the data from redux store
// in TotalItems component

const mapStateToProps = (state, ownProps) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(TotalItems);
