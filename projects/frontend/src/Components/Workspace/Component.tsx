import * as React from "react";

import Box from "@mui/material/Box";
import WorkspaceContainer from "./WorkspaceContainer";
import WorkspaceDragableLayer from "./WorkspaceDragableLayer";

export default function Workspace() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
      }}
    >
      <WorkspaceContainer />
      <WorkspaceDragableLayer />
    </Box>
  );
}
