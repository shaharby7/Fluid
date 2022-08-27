import React from "react";
import "./App.css";
import { Box } from "@mui/system";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import SideBar from "./Components/SideBar/Component";
import Workspace from "./Components/Workspace/Component";

const sx = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#282c34",
};

function App() {
  return (
    <Box sx={sx} id="hi">
      <DndProvider backend={HTML5Backend}>
        <SideBar />
        <Workspace />
      </DndProvider>
    </Box>
  );
}

export default App;
