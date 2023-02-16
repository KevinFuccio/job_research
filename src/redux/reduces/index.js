const initialState ={
    favoriteJobs:{
        content:[]
    }
};
const mainReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'ADD_TO_FAVORITE':
            return{
                ...state,
                favoriteJobs: {
                    ...state.favoriteJobs,
                    content: [...state.favoriteJobs.content, action.payload]
                }
            }
        case 'REMOVE_TO_FAVORITE':
            return{
                ...state,
                favoriteJobs:{
                    ...state.favoriteJobs,
                    content: state.favoriteJobs.content.filter((book,i) => i !== action.payload)
                }
            }
        default:
            return state;
    }
}
export default mainReducer