import React, { Component } from "react";
import MakeABurger from "./pages/MakeABurger.js"
import Burgercontainer from "./pages/Burgercontainer.js"
import "./App.css";
import { v4 as uuid } from "uuid";


class App extends Component {

state = {
  entries: [
    { 
      id: uuid(), 
      entry:"what the heck", 
      eaten: false, 
      computer: "" },
    { 
      id: uuid(), 
      entry:"what's up", 
      eaten: false, 
      computer: ""  },
  ],
};



AddthisEntry = (entry) => {
const newentry = {
id: uuid(),
entry,
eaten: false,
computer: sessionStorage.getItem("id")
};
this.setState({entries:[...this.state.entries,newentry] });
}

 render() {
  return (
    <div className="App">
    
      <div className="container2">
        <div>
          <div>
            <div className="jumbojumbotron">
              <div className="title">Eat the Burger</div>
              <div className="row img-responsive"></div>
              <div className="subtitle">Make Burgers, Eat Burgers.</div>
            </div>
          </div>
          <br />
          <h1>Burgers Made</h1>
          <MakeABurger Entry={this.AddthisEntry} />
        
        </div>
        {/* /jumbotron */}
        <div>
          {/* Undevoured Burgers */}
          <div>
            <ul>

            <Burgercontainer items={this.state.entries}/>
            
            </ul>
          </div>
        </div>
        {/* Devoured Burgers */}
        <div>
          {/* Devoured Burgers */}
          <div>
            <h1>Burgers Eaten</h1>
            <ul></ul>
          </div>
        </div>
      </div>
    </div>
  );
}
}
export default App;
