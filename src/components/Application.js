import React, { useContext } from "react";
import { Router } from "@reach/router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import UserProvider from "../providers/UserProvider";
import ProfilePage from "./ProfilePage";
import { UserContext } from "../providers/UserProvider";
import PasswordReset from "./PasswordReset";
import Meet from "./meet";
import Join from "./join";

function Application() {
  const user = useContext(UserContext);
  return (
        user ?
        <ProfilePage />
      :
        <Router>
          <Meet path="/" />
          <Join path="/join" />
          <SignUp path="/signUp" />
          <SignIn path="/SignIn" />
          <PasswordReset path = "passwordReset" />
        </Router>
      
  );
}

export default Application;
