import React, { Component } from "react";
const publicIp = require("public-ip");

class MakeABurger extends Component {
                 state = {
                   entry: "",
                 };

                 changeitfunction = (e) =>
                   this.setState({ entry: e.target.value });

                 submititfunction = (e) => {
                   e.preventDefault();
                   this.props.Entry(this.state.entry);

                  
                   this.setState({ entry: "" });
                   
                 };

                 componentDidMount = () => {
                   (async () => {
                     sessionStorage.setItem("id", await publicIp.v4());
                   })();
                 };

                 render() {
                   return (
                     <div>
                       <form
                         className="create-form"
                         onSubmit={this.submititfunction}
                       >
                         <div className="form-group">
                           <label htmlFor="newburger">New Burger:</label>
                           <input
                             type="text"
                             id="newburger"
                             name="burger"
                             value={this.state.entry}
                             onChange={this.changeitfunction}
                           />
                         </div>
                         <button type="submit">Make It!</button>
                       </form>
                     </div>
                   );
                 }
               }

export default MakeABurger;