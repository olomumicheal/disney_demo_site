import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },

    setSignOut(state) {
      state.user = null;
    },
  },
});

export default userSlice.reducer;
export const { setUser, setSignOut } = userSlice.actions;
