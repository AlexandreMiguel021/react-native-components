import { combineReducers, configureStore } from "@reduxjs/toolkit";

import ToastReducer from "./toast-store/toast-slice";

const reducers = combineReducers({
  toast: ToastReducer,
});

export const store = configureStore({
  reducer: reducers,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
