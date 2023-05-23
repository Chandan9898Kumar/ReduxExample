import {Add_To_Cart} from '../constants'

const initialState = { cardData: [] };


const reducer=(state=initialState,action)=>{
    switch(action.type){
        case Add_To_Cart:
            return {
                ...state,
                cardData:action.data
            }


        default :return state
    }

}
export default  reducer



// Rules of Reducers
// reducers must always follow some special rules:

// They should only calculate the new state value based on the state and action arguments
// They are not allowed to modify the existing state. Instead, they must make immutable updates, by copying the existing state and making changes to the copied values.
// They must not do any asynchronous logic or other "side effects"