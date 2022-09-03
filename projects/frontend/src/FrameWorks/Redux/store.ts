import { configureStore } from "@reduxjs/toolkit";
import { SideBarReducer } from "../../Components/SideBar/Reducer";
import { WorkspaceReducer } from "../../Components/Workspace/Reducer";

export const store = configureStore({
  reducer: {
    SideBar: SideBarReducer,
    Workspace: WorkspaceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
