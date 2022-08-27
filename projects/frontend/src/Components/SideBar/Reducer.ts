import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../Redux/store";

export interface SideBarState {
  route: string[];
}

export const initialState: SideBarState = {
  route: ["Home"],
};

export const SideBarSlice = createSlice({
  name: "SideBar",
  initialState,
  reducers: {
    setRoute: (state, action: PayloadAction<string[]>) => {
      state.route = action.payload;
    },
    cutRouteByIdx: (state, action: PayloadAction<number>) => {
      state.route = state.route.slice(0, action.payload+1);
    },

    pushToRoute: (state, action: PayloadAction<string>) => {
      state.route = [...state.route, action.payload];
    },

    popFromRoute: (state) => {
      if (state.route.length > 1) {
        state.route = state.route.slice(0, state.route.length - 1);
      }
    },
  },
});

export const { setRoute, pushToRoute, popFromRoute, cutRouteByIdx } =
  SideBarSlice.actions;
export const selectRoute = (state: RootState) => state.SideBar.route;
export const SideBarReducer = SideBarSlice.reducer;
