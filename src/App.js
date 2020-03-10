import React, { Component } from "react";

import Header from "./Header";
import RegistrationForm from './RegistrationForm';

const menu = [
  {
    link: "/articles",
    label: "Articles"
  },
  {
    link: "/contacts",
    label: "Contacts"
  },
  {
    link: "/posts",
    label: "Posts"
  }
];

class App extends Component {
  render() {
    return (
      <div>
        <Header items={menu} />
        <RegistrationForm />
      </div>
    );
  }
}

export default App;
