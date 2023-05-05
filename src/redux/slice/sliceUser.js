import { createSlice } from "@reduxjs/toolkit";

export const sliceUser = createSlice({
  name: "userState",
  initialState: {
    following: [],
  },

  reducers: {
    addFollow(state, { payload }) {
      state.following.push(payload);
    },
    removeFollow(state, { payload }) {
      state.following.splice(payload, 1);
    },
  },
});
export const { addFollow, removeFollow } = sliceUser.actions;
