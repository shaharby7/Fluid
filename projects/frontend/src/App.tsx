import React from "react";
import "./App.css";

import { useAppSelector } from "./hooks";

import SideBar from "./Components/Global/SideBar/Component";
import { selectTab } from "./Components/Global/SideBar/Reducer";
import { Typography } from "@mui/material";

function App() {
  const tab = useAppSelector(selectTab);

  return (
    <div className="App">
      <header className="App-header">
        <SideBar />
        <Typography paragraph>{tab}</Typography>
      </header>
    </div>
  );
}

export default App;
