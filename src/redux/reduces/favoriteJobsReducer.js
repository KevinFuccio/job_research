import { ADD_TO_FAVORITE } from "../actions";
import { REMOVE_TO_FAVORITE } from "../actions";
const initialState = {
 favouriteJobs: [],
};

export const favouriteJobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      return {
        ...state,
        favouriteJobs: [...state.favouriteJobs, action.payload],
      };
    case REMOVE_TO_FAVORITE:
      return {
        ...state,
        favouriteJobs: state.favouriteJobs.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
};
