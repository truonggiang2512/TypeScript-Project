import { configureStore } from "@reduxjs/toolkit";
import congViecReducer from "./reducers/congViecReducer";
import userReducer from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    congviecReducer: congViecReducer,
    userReducer: userReducer,
  },
});

export default store;
//lay ra kieu du lieu cua store
export type RootState = ReturnType<typeof store.getState>;
// Dispatch Type
export type DispatchType = typeof store.dispatch;
