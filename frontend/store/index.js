import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducerUser = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: {
    user: persistedReducerUser,
  },
  middleware: [thunk],
});

export default store;
export const persistor = persistStore(store);
