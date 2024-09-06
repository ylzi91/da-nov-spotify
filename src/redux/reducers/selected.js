import { ADD_SEL } from "../actions"




const initialState = {
    select: null,
}

 const selectedReducers = ( state = initialState, action ) => {
    switch(action.type){
        case ADD_SEL: 
            return {
                select: action.payload,
            }

        default: {
            return state
        }
    }
}

export default selectedReducers