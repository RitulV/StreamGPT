import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import userReducer from "./userSlice";
import movieReducer from "./movieSlice"

const rootReducer = combineReducers({
  // users: userReducer,
  movies: movieReducer,
});

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const appStore = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
  //     },
  //   }),
});

// export const persistor = persistStore(appStore);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof appStore.dispatch; // Inferred type: {users: UsersState}
