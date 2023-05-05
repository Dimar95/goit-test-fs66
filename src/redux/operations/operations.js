import { createAsyncThunk } from "@reduxjs/toolkit";

import { getCurrentUser, getUser } from "../API/mockAPI";

export const fetchUser = createAsyncThunk(
  "contacts/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const allCard = await getUser();
      return allCard;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const putUser = createAsyncThunk(
  "contacts/fetchCurrent",
  async (id, { rejectWithValue }) => {
    try {
      const currentUser = await getCurrentUser(id);
      const user = { ...currentUser, followers: currentUser.followers + 1 };
      const putUser = await getCurrentUser(id, user);
      return putUser;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// export const putUser = createAsyncThunk(
//   "contacts/fetchCurrent",
//   async (id, { rejectWithValue }) => {
//     try {
//       const currentUser = await getCurrentUser(id);
//       const user = { ...currentUser, followers: currentUser.followers + 1 };
//       const putUser = await getCurrentUser(id, user);
//       return putUser;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
