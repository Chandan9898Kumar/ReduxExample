import {Add_To_Cart} from '../constants'
export const addToCart=(data)=>{
    return{
        type:Add_To_Cart,
        data:data
    }

}