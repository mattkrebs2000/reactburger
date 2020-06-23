import React, { Component } from "react";
import "./welcome.css";




class Welcome extends Component {
  state = {};

  componentDidMount() {
 console.log("Home Component DID MOUNT!");
    sessionStorage.setItem("loggedin", true);
  }

  // Dynamically grabs name from local storage
  Name = window.sessionStorage.getItem("firstname");

  render() {
    return (
      // <>
      <div>
      
    
      </div>
    );
  }
}

export default Welcome;
