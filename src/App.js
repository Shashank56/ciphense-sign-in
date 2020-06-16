import React, { useContext } from "react";
import { Router } from "@reach/router";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Application from "./components/Application";
import UserProvider from "./providers/UserProvider";
import { UserContext } from "./providers/UserProvider";
function App() {
  
  return (
    <div classname="App-header">
    <div classname="auth-wrapper">
    <UserProvider>
      <Application />
    </UserProvider>
    </div>
    </div>
  );
}

export default App;
