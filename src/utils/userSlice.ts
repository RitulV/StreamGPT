import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./configureStore";
import type { UserMetadata } from "@supabase/supabase-js";

interface UserState {
  data: UserMetadata | undefined | null;
}

// initial state
const initialState: UserState = {
  data: null,
};

const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    logInUser: (state, action : PayloadAction<UserMetadata | undefined>) => {
      state.data = action.payload;
    },
    logOutUser: (state) => {
      state.data = null;
    },
  },
});

export const { logInUser, logOutUser } = UserSlice.actions;

export const selectUser = (state: RootState) => state.users.data

export default UserSlice.reducer;

