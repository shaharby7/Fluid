import { configureStore } from "@reduxjs/toolkit";
import { SideBarReducer } from "./Components/Global/SideBar/Reducer";

export const store = configureStore({
  reducer: {
    SideBar: SideBarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
