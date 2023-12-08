import "./index.css";
import React from "react";
import {BrowserRouter as Router} from "react-router-dom";


const TopContainer:React.FC = () => {
  return (
    <div className="topContainer">
    </div>
  )
}

const BottomContainer:React.FC = () => {
  return (
    <div className="bottomContainer">
    </div>
  )
}


const App:React.FC = () => {
  return (
    <Router>
      <div className="app">
      <TopContainer />
      <BottomContainer />
      </div>
    </Router>
  );
}

export default App;