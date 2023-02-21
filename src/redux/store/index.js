import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { avaliableJobs } from "../reduces/availableJobs";
import { favouriteJobsReducer } from "../reduces/favoriteJobsReducer";
import { persistStore,persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
    key: 'root',
    storage,
    transforms:[
        encryptTransform({
            secretKey: process.env.REACT_APP_LOCAL_KEY
        })
    ]
};
const rootReducer = combineReducers({
    Favjobs: favouriteJobsReducer,
    jobs: avaliableJobs
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store);