import React, { Component } from "react";
import Logo from "./ciphense_logo.png"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GoogleButton from "react-google-button"
import firebase from './firebase';
import {signInWithGoogle} from './firebase'
import {auth} from './firebase'
import "firebase/auth";
import "firebase/firestore";
import Meet from "./meet"
import * as ROUTES from '../../src/constants/Routes';
import {useHistory } from "react-router-dom";

// const history = useHistory();

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

const ERROR_CODE_ACCOUNT_EXISTS =
  'auth/account-exists-with-different-credential';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with an E-Mail address to
  this social account already exists. Try to login from
  this account instead and associate your social accounts on
  your personal account page.
`;

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
    const { email, password } = this.state;

    // this.props.firebase
    // .doSignInWithEmailAndPassword(email, password)
    //   .then(() => {
    //     this.setState({ ...INITIAL_STATE });
    //     this.props.history.push(ROUTES.HOME);
    //   })
    //   .catch(error => {
    //     this.setState({ error });
    //   });

    // event.preventDefault();
    const signInWithEmailAndPasswordHandler = (event,email, password) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).catch(error => {
        // setError("Error signing in with password and email!");
        //   console.error("Error signing in with password and email", error);
        });
        console.log(" signing in with password and email");
        // history.push('/');
      };
  };

   

//   onGoogle = event => {
//     // this.props.firebase
//     doSignInWithGoogle()
//       .then(socialAuthUser => {
//         // Create a user in your Firebase Realtime Database too
//         return this.props.firebase.user(socialAuthUser.user.uid).set({
//           username: socialAuthUser.user.displayName,
//           email: socialAuthUser.user.email,
//           roles: {},
//         });
//       })
//       .then(() => {
//         this.setState({ error: null });
//         this.props.history.push(ROUTES.HOME);
//       })
//       .catch(error => {
//         if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
//           error.message = ERROR_MSG_ACCOUNT_EXISTS;
//         }

//         this.setState({ error });
//       });

//     event.preventDefault();
//   };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

    render() {
        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === '';

        return (
            <div className="auth-inner">
            <form onSubmit={this.onSubmit}>
                <img src = {Logo} alt="Logo"/>
                <h3>Sign In</h3>
                
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block"  onClick={this.onSubmit}>Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                <GoogleButton  onClick={() => {
                    signInWithGoogle();
                }}/>
                <p className="forgot-password text-center"> Not registered Yet?
                    <Link to='/sign-up'> <a href="#">sign up</a> </Link>
                </p>

            </form>
            </div>
        );
    }
}
