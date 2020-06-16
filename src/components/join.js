import React, { useContext } from "react";
// import "./styles/homePage.styles.css";
import Logo from "./ciphense_logo.png"
import Meet from "./meet";


class Join extends React.Component{
    constructor(props){
        super(props);
        this.state={show:"False"}
    }

   
    
    render(){
        return( 
            
            <div className="auth-inner">
              <div className="join">
                <img src = {Logo} alt="Logo"/>
                  <form>
                <br />

                      <div className="form-group">
                      <input className="form-control" type={"text"} placeholder={"Meeting ID or Personal URL"}  />
                      </div>
                        <br />
                  </form>
                  <button className="btn btn-primary btn-block" type="submit">
                      <span>Join meeting</span>
                  </button>
                  {/* <button className="button" type="submit" >
                      <span>Host meeting</span>
                  </button> */}
              </div>
          </div>
        );
    }
}

export default Join;