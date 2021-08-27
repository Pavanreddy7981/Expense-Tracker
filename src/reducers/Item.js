import {SET_ITEMS, DELETE_ITEM} from "../actions/action.types";

const initialState = {
    items : [],
    loading : true,
    error  : false
}

export default (state=initialState, action) => {
    switch (action.type) {
        case SET_ITEMS:
            return{
                ...state,
                items : state.items.concat(action.payload),
                loading : false
            }
        
        case DELETE_ITEM:
             return{
                ...state,
                items : state.items.filter(item => item.id !== action.payload)
                
            }
        default:
            return state;
    }
}