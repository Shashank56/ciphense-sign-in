import React, { Component,useState } from "react";
import Logo from "./ciphense_logo.png"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { auth, signInWithGoogle, generateUserDocument } from "./firebase";


const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [error, setError] = useState(null);

    const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
      event.preventDefault();
      try{
        const {user} = await auth.createUserWithEmailAndPassword(email, password);
        generateUserDocument(user, {FirstName});
      }
      catch(error){
        setError('Error Signing up with email and password');
      }

      setEmail("");
      setPassword("");
      setFirstName("");
      setLastName("")
    };

    const onChangeHandler = event => {
      const { name, value } = event.currentTarget;

      if (name === "userEmail") {
        setEmail(value);
      } else if (name === "userPassword") {
        setPassword(value);
      } else if (name === "FirstName") {
        setFirstName(value);
      }else if (name === "LastName") {
        setLastName(value);
      }
    };

    // render() {
        return (
            <div className="auth-inner">
            <form>
                <img src = {Logo} alt="Logo"/>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name"  name="FirstName" onChange={event => onChangeHandler(event)}/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" name="LastName" onChange={event => onChangeHandler(event)}/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="userEmail" onChange={event => onChangeHandler(event)}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="userPassword" onChange={event => onChangeHandler(event)}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={event => {
              createUserWithEmailAndPasswordHandler(event, email, password);
            }}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered
                    <Link to='/sign-in'> <a href="#">sign in?</a> </Link>
                </p>
            </form>
            </div>
        );
    // }
}

export default SignUp;