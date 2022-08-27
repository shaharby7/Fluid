import update from "immutability-helper";
import type { CSSProperties, FC } from "react";
import { useCallback, useState } from "react";
import { useDrop } from "react-dnd";

// import BasicBlock from "../Blocks/BasicBlock/Component";
import type { DragItem } from "./interfaces";
import { ItemTypes } from "../../DND/itemTypes";
import { DraggableBox } from "./DragableBox";

const styles: CSSProperties = {
  width: "100%",
  height: "100%",
  position: "relative",
};

export interface ContainerProps {
  snapToGrid?: boolean;
}

interface BoxMap {
  [key: string]: { top: number; left: number; title: string };
}

const WorkspaceContainer: FC<ContainerProps> = ({ snapToGrid = false }) => {
  const [boxes, setBoxes] = useState<BoxMap>({
    a: { top: 20, left: 80, title: "Drag me around" },
    b: { top: 180, left: 20, title: "Drag me too" },
  });

  const moveBox = useCallback(
    (id: string, left: number, top: number) => {
      setBoxes(
        update(boxes, {
          [id]: {
            $merge: { left, top },
          },
        })
      );
    },
    [boxes]
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

        moveBox(item.id, left, top);
        return undefined;
      },
    }),
    [moveBox]
  );

  return (
    <div ref={drop} style={styles}>
      {Object.keys(boxes).map((key) => (
        <DraggableBox
          key={key}
          id={key}
          {...(boxes[key] as { top: number; left: number; title: string })}
        />
      ))}
    </div>
  );
};

export default WorkspaceContainer;
