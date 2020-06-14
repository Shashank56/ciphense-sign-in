import React, { Component } from "react";
import Logo from "./ciphense_logo.png"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GoogleButton from "react-google-button"


export default class Login extends Component {
    render() {
        return (
            <div className="auth-inner">
            <form>
                <img src = {Logo} alt="Logo"/>
                <h3>Sign In</h3>
                
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                <GoogleButton />
                <p className="forgot-password text-center"> Not registered Yet?
                    <Link to='/sign-up'> <a href="#">sign up</a> </Link>
                </p>

            </form>
            </div>
        );
    }
}
