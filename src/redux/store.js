
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modeSlice from "./modeSlice.js";
import goalDataSlice from "./goalDataSlice.js";
import { 
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    blacklist: ['goalData'],// ⛔ Exclude goalData slice from being persisted
}

const rootReducer = combineReducers({
    screenMode : modeSlice,
    goalData : goalDataSlice
    
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export default store;