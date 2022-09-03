export enum SiteBarItemKinds {
  "Dragable" = "Dragable",
  "InlineItem" = "InlineItem",
}

export type SideBarItem = {
  kind: SiteBarItemKinds;
  value: string;
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
        value: "BasicBlock",
      },
      Deployments: {
        kind: SiteBarItemKinds.Dragable,
        value: "BasicBlock",
      },
    },
    "Basic block": {
      kind: SiteBarItemKinds.Dragable,
      value: "BasicBlock",
    },
  },
};

export default sideBarItemsConfig;
