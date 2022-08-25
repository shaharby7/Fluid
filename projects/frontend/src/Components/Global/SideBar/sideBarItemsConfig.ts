import React from "react";
import BasicComponent from "../../Common/BasicComponent/Component";

export enum SiteBarItemKinds {
  "Dragable" = "Dragable",
  "InlineItem" = "InlineItem",
}

type ReactRender = (props?: unknown) => React.Component | JSX.Element;

export type SideBarItem = {
  kind: SiteBarItemKinds;
  component?: React.Component | ReactRender;
};

export type SideBarItemsConfig = {
  [page: string]: SideBarItem | SideBarItemsConfig;
};

const sideBarItemsConfig: SideBarItemsConfig = {
  Home: {
    Workspace: {},
    Debug: {},
    Deployments: {},
    JustTrying: {
      Workspace: {
        kind: SiteBarItemKinds.Dragable,
        component: BasicComponent,
      },
      Debug: {
        kind: SiteBarItemKinds.Dragable,
        component: BasicComponent,
      },
      Deployments: {
        kind: SiteBarItemKinds.Dragable,
        component: BasicComponent,
      },
    },
  },
};

export default sideBarItemsConfig;
