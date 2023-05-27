import { connect } from "react-redux";
import Home from "../Components/Home";
import { addToCart, RemoveFromCart } from "../Services/Actions/actions";

//                                            mapStateToProps

// As the first argument passed in to connect, mapStateToProps is used for selecting the part of the data from the store that the connected component needs.
// It’s frequently referred to as just mapState for short.
// It is called every time the store state changes.
// It receives the entire store state, and should return an object of data this component needs.

// mapStateToProps Will Not Run if the Store State is the Same.
const mapStateToProps = (state, ownProps) => {
  return state;
};

// It should take a first argument called state, optionally a second argument called ownProps, and
// return a plain object containing the data that the connected component needs.

// This function should be passed as the first argument to connect,
// and will be called every time when the Redux store state changes.
//  If you do not wish to subscribe to the store, pass null or undefined to connect in place of mapStateToProps.

//                                   mapDispatchToProps

// As the second argument passed in to connect, mapDispatchToProps is used for dispatching actions to the store.

// dispatch is a function of the Redux store. You call store.dispatch to dispatch an action.
// This is the only way to trigger a state change.

// With React Redux, your components never access the store directly - connect does it for you.
// React Redux gives you two ways to let components dispatch actions:

// By default, a connected component receives props.dispatch and can dispatch actions itself.
// connect can accept an argument called mapDispatchToProps, which lets you create functions that dispatch when called, and pass those functions as props to your component.
// The mapDispatchToProps functions are normally referred to as mapDispatch for short, but the actual variable name used can be whatever you want.

// The mapDispatchToProps function will be called with 'dispatch' as the first argument.
//  You will normally make use of this by returning new functions that call dispatch() inside themselves,
//  and either pass in a plain action object directly or pass in the result of an action creator.

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
  removeFromCart: (data) => dispatch(RemoveFromCart(data)),
});

//                                        OR

// const mapDispatchToProps = (dispatch) => {
//     return{
//       addToCartHandler: (data) => dispatch(addToCart(data)),
//       removeFromCart: (data) => dispatch(RemoveFromCart(data))
//     }
//   };

// addToCartHandler is function we created.

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// Here we connected our Home Component with redux

// The connect() function connects a React component to a Redux store.
// It provides its connected component with the pieces of the data it needs from the store,
// and the functions it can use to dispatch actions to the store.

// It does not modify the component class passed to it; instead,
// it returns a new, connected component class that wraps the component you passed in.

//   NOTE -
//   Here in Container we will connect React with Redux.

// We can directly use Home component in App component but we in redux we use component with container
//  just to follow best practices.
