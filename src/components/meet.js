import React, { Component } from "react";
import { Link } from "@reach/router";
import Logo from "./ciphense_logo.png"


class Meet extends Component {
  render() {
    return (
      <div className="auth-inner">
        <img src = {Logo} alt="Logo"/>
      {/* <div style={{ height: "75vh" }} className="container valign-wrapper"> */}
        {/* <div className="row"> */}
          <div className="col s12 center-align">
            <br />
            <div className="join center-align">
              <Link
                to="/join"
                style={{
                  width: "200px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-primary btn-block "
              >
                JOIN MEETING
              </Link>
            </div>
            <br />
            <div className="join">
              <Link
                to="/SignIn"
                style={{
                  width: "200px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-info btn-block"
              >
                HOST MEETING
              </Link>
            </div>
          </div>
        {/* </div> */}
      {/* </div> */}
      </div>
    );
  }
}

export default Meet;