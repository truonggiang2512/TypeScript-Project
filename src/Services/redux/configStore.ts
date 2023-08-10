import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "./reducers/CommentReducer/commentReducer";
import congViecReducer from "./reducers/congViecReducer";
import detailReducer from "./reducers/DetailReducer/detailReducer";
import homeReducer from "./reducers/HomePage/homeReducer";
import jobTypeReducer from "./reducers/JobTypeReducer/jobTypeReducer";
import menuReducer from "./reducers/MenuJobReducer/menuReducer";
import profileReducer from "./reducers/ProfileReducer/profileReducer";
import userReducer from "./reducers/userReducer";
import searchReducer from "./searchReducer/searchReducer";

const store = configureStore({
  reducer: {
    congviecReducer: congViecReducer,
    userReducer: userReducer,
    homeReducer: homeReducer,
    profileReducer: profileReducer,
    searchReducer: searchReducer,
    menuReducer: menuReducer,
    jobTypeReducer: jobTypeReducer,
    detailReducer: detailReducer,
    commentReducer: commentReducer,
  },
});

export default store;
//lay ra kieu du lieu cua store
export type RootState = ReturnType<typeof store.getState>;
// Dispatch Type
export type DispatchType = typeof store.dispatch;
