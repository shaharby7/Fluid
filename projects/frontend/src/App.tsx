import React from "react";
import "./App.css";

import SideBar from "./Components/Global/SideBar/Component";

import BasicComponent from "./Components/Common/BasicComponent/Component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SideBar />
        <BasicComponent />
      </header>
    </div>
  );
}

export default App;
