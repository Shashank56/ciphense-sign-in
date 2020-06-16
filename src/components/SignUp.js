import React, { useContext, useState } from "react";
import { Link } from "@reach/router";
import { auth, signInWithGoogle, generateUserDocument } from "../firebase";
import Logo from "./ciphense_logo.png"

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);

  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, {displayName});
    }
    catch(error){
      setError('Error Signing up with email and password');
    }
      
    setEmail("");
    setPassword("");
    setDisplayName("");
  };

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };

  return (
    <div className="auth-inner">
      {/* <h1 className="text-3xl mb-2 text-center font-bold">Sign Up</h1> */}
      {/* <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8"> */}
        {error !== null && (
          <div className="py-4 bg-red-600 w-full text-white text-center mb-3">
            {error}
          </div>
        )}

        <form className="">
        <img src = {Logo} alt="Logo"/>
        {/* <h3>Sign Up</h3> */}
          <div className="form-group">
          <label htmlFor="displayName" className="block">
            UserName
          </label>
          <input
            type="text"
            className="form-control "
            name="displayName"
            value={displayName}
            placeholder="Enter Name"
            id="displayName"
            onChange={event => onChangeHandler(event)}
          />
          </div>
          <div className="form-group">
          <label htmlFor="userEmail" className="block">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            name="userEmail"
            value={email}
            placeholder="Email"
            id="userEmail"
            onChange={event => onChangeHandler(event)}
          />
          </div>
          <div className="form-group">
          <label htmlFor="userPassword" className="block">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            name="userPassword"
            value={password}
            placeholder="Your Password"
            id="userPassword"
            onChange={event => onChangeHandler(event)}
          />
          </div>
          <button
            className="btn btn-primary btn-block"
            onClick={event => {
              createUserWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            Register
          </button>
        </form>
        <p className="ft">or</p>
        {/* <button
          onClick={() => {
            try {
              signInWithGoogle();
            } catch (error) {
              console.error("Error signing in with Google", error);
            }
          }}
          className="btn btn-primary btn-block"
        >
          Sign In with Google
        </button> */}
        <p className="ft">
          Already have an account?{" "}
          <Link to="/SignIn" className="text-blue-500 hover:text-blue-600">
            Sign in here
          </Link>{" "}
        </p>
      {/* </div> */}
    </div>
  );
};

export default SignUp;
