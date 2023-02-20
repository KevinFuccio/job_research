export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
export const REMOVE_TO_FAVORITE = 'REMOVE_TO_FAVORITE';
export const AVAILABLE_JOBS = 'AVAILABLE_JOBS'

export const addToFavoriteAction = (data) =>({
    type: ADD_TO_FAVORITE,
    payload: data
});
export const removeToFavoriteAction = (index) => ({
    type:REMOVE_TO_FAVORITE,
    payload: index
});
export const getJobs = (baseEndpoint,companyName) => {

    return async (dispatch) =>{
        try {
          const response = await fetch(baseEndpoint + companyName)
          if (response.ok) {
            const { data } = await response.json()
            dispatch({
                type: AVAILABLE_JOBS,
                payload: data
            })
          } else {
            alert('Error fetching results')
          }
        } catch (error) {
          console.log(error)
        }
    }
  }
export const jobSearch = (baseEndpoint,query,limit) =>{
  
  return async(dispatch)=>{
    try {
    const response = await fetch(baseEndpoint + query + limit)
    if (response.ok) {
      const { data } = await response.json()
      dispatch({
        type: AVAILABLE_JOBS,
        payload: data
      })
    } else {
      alert('Error fetching results')
    }
  } catch (error) {
    console.log(error)
  }
 }
}