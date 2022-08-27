import React from "react";
import BasicBlock from "../Blocks/BasicBlock/Component";
import { BlockProps } from "../Blocks/BasicBlock/Component";

export enum SiteBarItemKinds {
  "Dragable" = "Dragable",
  "InlineItem" = "InlineItem",
}

export type SideBarItem = {
  kind: SiteBarItemKinds;
  component?: React.FC<BlockProps>;
};

export type SideBarItemsConfig = {
  [page: string]: SideBarItem | SideBarItemsConfig;
};

const sideBarItemsConfig: SideBarItemsConfig = {
  Home: {
    Blocks: {},
    Debug: {},
    Deployments: {},
    JustTrying: {
      Debug: {
        kind: SiteBarItemKinds.Dragable,
        component: BasicBlock,
      },
      Deployments: {
        kind: SiteBarItemKinds.Dragable,
        component: BasicBlock,
      },
    },
  },
};

export default sideBarItemsConfig;
