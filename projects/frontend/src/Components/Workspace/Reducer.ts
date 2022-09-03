import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import update from "immutability-helper";
import _ from "lodash";

import { IBlockData } from "@fluid/data-structures";

import type { RootState } from "../../FrameWorks/Redux/store";

export interface WorkspaceState {
  blocks: IBlockData[];
  autoIncrimentId: number;
}

export const initialState: WorkspaceState = {
  blocks: [],
  autoIncrimentId: 0,
};

export const WorkspaceSilce = createSlice({
  name: "Workspace",
  initialState,
  reducers: {
    addBlock: (
      state,
      action: PayloadAction<{ type: string; x: number; y: number }>
    ) => {
      state.autoIncrimentId++;
      const newBlock: IBlockData = {
        id: `${action.payload.type}-${state.autoIncrimentId}`,
        name: "New block",
        type: action.payload.type,
        paremeters: {},
        actions: [],
        uiProperties: {
          x: action.payload.x,
          y: action.payload.y,
        },
      };
      state.blocks = [...state.blocks, newBlock];
    },

    modifyBlock: (
      state,
      action: PayloadAction<{ id: string; attrs: Partial<IBlockData> }>
    ) => {
      const newState = update(state, {
        blocks: {
          $apply: (blocks: IBlockData[]) =>
            blocks.map((block) => {
              if (block.id !== action.payload.id) return block;
              return _.merge(block, action.payload.attrs);
            }),
        },
      });
      state = newState;
    },
  },
});

export const { addBlock, modifyBlock } = WorkspaceSilce.actions;
export const selectBlocks = (state: RootState) => state.Workspace.blocks;
export const WorkspaceReducer = WorkspaceSilce.reducer;
