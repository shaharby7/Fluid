import update from "immutability-helper";
import type { CSSProperties, FC } from "react";
import { useCallback, useState } from "react";
import { useDrop } from "react-dnd";

import type { DragItem } from "./interfaces";
import { ItemTypes } from "../../FrameWorks/DND/itemTypes";
import { DraggableBox } from "./DragableBox";
import { useAppDispatch, useAppSelector } from "../../FrameWorks/Redux/hooks";

import { modifyBlock } from "./Reducer";
import { IBlockData } from "@fluid/data-structures";

const styles: CSSProperties = {
  width: "100%",
  height: "100%",
  position: "relative",
};
const WorkspaceContainer: FC = () => {
  const blocks: IBlockData[] = useAppSelector(
    (state) => state.Workspace.blocks
  );
  
  const dispatch = useAppDispatch();

  const moveBlock = useCallback(
    (id: string, left: number, top: number) => {
      dispatch(
        modifyBlock({ id, attrs: { uiProperties: { x: left, y: top } } })
      );
    },
    [dispatch]
  );

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.BLOCK,
      drop(item: DragItem, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset() as {
          x: number;
          y: number;
        };

        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);

        moveBlock(item.id, left, top);
        return undefined;
      },
    }),
    [moveBlock]
  );

  return (
    <div ref={drop} style={styles}>
      {blocks.map((block: IBlockData) => (
        <DraggableBox
          key={block.id}
          id={block.id}
          // {...(block as { top: number; left: number; id: string })}
          top={block.uiProperties.y}
          left={block.uiProperties.x}
        />
      ))}
    </div>
  );
};

export default WorkspaceContainer;
