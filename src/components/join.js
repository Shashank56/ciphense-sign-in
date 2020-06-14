import React from "react";
// import "./styles/homePage.styles.css";


class Meet extends React.Component{
    constructor(props){
        super(props);
        this.state={show:"False"}
    }

   
    
    render(){
        return(
            <div className="main">
              <div className="join">
                  <form>
                      <div className="inputholder">
                      <input className="textInput" type={"text"} placeholder={"Meeting ID"}  />
                      </div>
                  </form>
                  <button className="button" type="submit">
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

export default Meet;