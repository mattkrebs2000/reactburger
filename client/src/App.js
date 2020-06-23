import React from "react";
import "./App.css";

import Welcome from "./pages/Welcome.page";

function App() {
  return (
    <div classname="App">
    
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
          <form className="create-form">
            <div className="form-group">
              <label htmlFor="newburger">New Burger:</label>
              <input type="text" id="newburger" name="burger" />
            </div>
            <button type="submit">Make It!</button>
          </form>
        </div>
        {/* /jumbotron */}
        <div>
          {/* Undevoured Burgers */}
          <div>
            <ul></ul>
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

export default App;
