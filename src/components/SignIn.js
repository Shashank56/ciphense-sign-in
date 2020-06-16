import React, {useState} from "react";
import { Link } from "@reach/router";
import { signInWithGoogle } from "../firebase";
import { auth } from "../firebase";
import Logo from "./ciphense_logo.png"

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const signInWithEmailAndPasswordHandler = (event,email, password) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).catch(error => {
        setError("Error signing in with password and email!");
          console.error("Error signing in with password and email", error);
        });
      };
      
      const onChangeHandler = (event) => {
          const {name, value} = event.currentTarget;
        
          if(name === 'userEmail') {
              setEmail(value);
          }
          else if(name === 'userPassword'){
            setPassword(value);
          }
      };
   

  return (
    <div className="auth-inner">
      {/* <h1 className="text-3xl mb-2 text-center font-bold">Sign In</h1> */}
      {/* <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8"> */}
        {/* {error !== null && <div className = "py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>} */}
        <form>
        <img src = {Logo} alt="Logo"/>
          {/* <h3>Sign In</h3> */}
           <div className="form-group">
                    <label>Email address</label>           
          <input
            type="email"
            className="form-control"
            name="userEmail"
            value = {email}
            placeholder="Email"
            id="userEmail"
            onChange = {(event) => onChangeHandler(event)}
          />
          </div>
          <div className="form-group">
            <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="userPassword"
            value = {password}
            placeholder="Password"
            id="userPassword"
            onChange = {(event) => onChangeHandler(event)}
          />
          </div>
          <button className="btn btn-primary btn-block" onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
            Sign in
          </button>
        </form>
        <p className="ft">or</p>
        <button
          className="btn btn-primary btn-block"
          onClick={() => {
            signInWithGoogle();
          }}
        >
          Sign in with Google
        </button>
        <p className="ft">
          Don't have an account?{" "}
          <Link to="/signUp" className="text-blue-500 hover:text-blue-600">
            Sign up here
          </Link>{" "}
          <br />{" "}
          <Link to="passwordReset" className="text-blue-500 hover:text-blue-600">
            Forgot Password?
          </Link>
        </p>
      {/* </div> */}
    </div>
  );
};

export default SignIn;
