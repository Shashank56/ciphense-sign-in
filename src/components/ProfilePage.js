import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
// import { navigate } from "@reach/router";
import {auth} from "../firebase";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimezonePicker from 'react-timezone';
// const user = useContext(UserContext);
//   const {photoURL, displayName, email} = user;
//   console.log(user);
class ProfilePage extends React.Component {

 constructor(props){
        super(props);
        this.state={startDate:new Date()}
    }
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  }; 

render(){
  return (
    <div className = "auth-inner">
      <div className="">
        {/* <div
          style={{
            background: `url(${photoURL || 'https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png'})  no-repeat center center`,
            backgroundSize: "cover",
            height: "40px",
            width: "40px"
          }}
          className="form-control"
        ></div>
        <div className = "md:pl-4">
        <h2 className = "text-2xl font-semibold text-red">{displayName}</h2>
        <h3 className = "italic">{email}</h3>
        </div> */}
        <h1>Meeting Details</h1>
        <div className="form-group">
        <label>Topic </label>
        <input className="form-control" defaultvalue="My Meeting"/>
        </div>
        <div className="form-group">
        <label>Description(optional) </label>
        <input className="form-control"/>
        </div>
        <div className="form-group">
        <label>When </label>
        <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        minDate={new Date()}
      />
        </div>
        <div className="">
        <label>Duration </label>
        <input className="" type="number" min="0"/><h4>hr</h4><input className="" type="number" min="0"/><h4>min</h4>
        </div>
        <div className="form-group">
        <label>TimeZone </label>
        <TimezonePicker
    value="Asia/Kolkata"
    onChange={timezone => console.log('New Timezone Selected:', timezone)}
    inputProps={{
      placeholder: 'Select Timezone...',
      name: 'timezone',
    }}
  />
        </div>
        <div className="form-group">
        <label>Meeting Password </label>
        <input className="form-control" type="text"/>
        </div>
        {/* <div className="form-group">
        <label>Topic </label>
        <input className="form-control"/>
        </div>
        <div className="form-group">
        <label>Topic </label>
        <input className="form-control"/>
        </div> */}
        <button className="btn btn-primary btn-solid">Save</button>
        <button>Cancel</button>
      </div>
      <button className = "w-full py-3 bg-red-600 mt-4 " onClick = {() => {auth.signOut()}}>Sign out</button>
    </div>
  ) 
}
};

export default ProfilePage;