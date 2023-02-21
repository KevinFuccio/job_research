import { AVAILABLE_JOBS ,JOBS_LOADING_ON, JOBS_LOADING_OFF} from "../actions";
const initialState = {
    availablejobs: [],
    loading:false
}

export const avaliableJobs = (state= initialState,action) =>{
    switch(action.type){
        case AVAILABLE_JOBS:
            return{
                ...state,
                availablejobs: action.payload
            }
        case JOBS_LOADING_ON:
            return{
                ...state,
                loading: true
            }
        case JOBS_LOADING_OFF:
            return{
                ...state,
                loading: false
            }
        
            default:
                return state
    }
}