import React from "react";
import { JobBoard } from "./JobBoard";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoginForm } from './LoginForm';

function App() {
  return (
    <Router>
      <div>
        <JobBoard />
        <LoginForm />
      </div>
    </Router>
  );
}

export default App;
