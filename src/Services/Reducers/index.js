import {combineReducers} from 'redux'
import reducer from "./reducers";


export default combineReducers({
    reducer
})


// combineReducers to combine multiple slice reducers into a single larger reducer
// combineReducers. The most common use case is to create your root reducer with it.


// The Redux combineReducers utility function tries to optimize for this. 
// If none of the slice reducers returned a new value, 
// then combineReducers returns the old state object instead of a new one.
// This means that mutation in a reducer can lead to the root state object not being updated, 
// and thus the UI won't re-render.