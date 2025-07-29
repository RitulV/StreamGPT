import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

export const appStore = configureStore({
  reducer: {
    users: userReducer,
  },
});

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch; // Inferred type: {users: UsersState}