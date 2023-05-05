import { configureStore } from "@reduxjs/toolkit";
import { sliceUser } from "../slice/sliceUser";
import { userApi } from "../API/mockAPI";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
const persistConfig = {
  key: "root",
  storage,
};
const persistedContacts = persistReducer(persistConfig, sliceUser.reducer);

export const store = configureStore({
  reducer: {
    userState: persistedContacts,
    [userApi.reducerPath]: userApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(userApi.middleware),
});
export const persistor = persistStore(store);
