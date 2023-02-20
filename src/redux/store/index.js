import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { avaliableJobs } from "../reduces/availableJobs";
import { favouriteJobsReducer } from "../reduces/favoriteJobsReducer";
const rootReducer = combineReducers({
    Favjobs: favouriteJobsReducer,
    jobs: avaliableJobs
})

const store = configureStore({
    reducer: rootReducer
})
export default store