import { AVAILABLE_JOBS } from "../actions";
const initialState = {
    availablejobs: []
}

export const avaliableJobs = (state= initialState,action) =>{
    switch(action.type){
        case AVAILABLE_JOBS:
            return{
                ...state,
                availablejobs: [action.payload]
            }
            default:
                return state
    }
}