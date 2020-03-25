import React from "react";
import logo from "./logo.svg";
import { JobBoard } from "./JobBoard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <JobBoard />
      </div>
    </Router>
  );
}

export default App;
