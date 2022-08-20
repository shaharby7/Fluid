import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../../store";

export interface SideBarState {
  tab: string;
}

export const initialState: SideBarState = {
  tab: "",
};

export const SideBarSlice = createSlice({
  name: "SideBar",
  initialState,
  reducers: {
    setTab: (state, action: PayloadAction<string>) => {
      state.tab = action.payload;
    },
  },
});

export const { setTab } = SideBarSlice.actions;
export const selectTab = (state: RootState) => state.SideBar.tab;
export const SideBarReducer = SideBarSlice.reducer;
