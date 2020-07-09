import React, { Component } from "react";
import MakeABurger from "./pages/MakeABurger.js"
import Burgercontainer from "./pages/Burgercontainer.js"
import Tummy from "./pages/Tummy.js"
import "./App.css";
import { v4 as uuid } from "uuid";
import API from "./util/API";


class App extends Component {
  state = {
    FilteredBurgers: [],
    EatenBurgers: [],

    entries: [
      {
        id: uuid(),
        entry: "what the heck",
        eaten: false,
        computer: "",
      },
      {
        id: uuid(),
        entry: "what's up",
        eaten: true,
        computer: "",
      },
    ],
  };

  componentDidMount = () => {
    API.getBurgers()
    .then((res) =>
    console.log("this is the response", res.data),
    this.findYourBurgers(),
    this.inyourtummy()
    )
  };

  findYourBurgers = () => {
    this.setState({
      FilteredBurgers: [
        ...this.state.entries.filter(
          (data) =>
            !data.eaten && data.computer === sessionStorage.getItem("id")
        ),
      ],
    });
  };

  inyourtummy = () => {
    this.setState({
      EatenBurgers: [
        ...this.state.entries.filter(
          (data) => data.eaten && data.computer === sessionStorage.getItem("id")
        ),
      ],
    });
  };

  changetoeaten = (id) => {
    console.log(id);
    this.setState({
      entries: this.state.entries.map((data) => {
        if (data.id === id) {
          data.eaten = true;
        }
        console.log(data.eaten);
        return data;
      }),
    }, this.inyourtummy(),
     this.findYourBurgers());
  };

  delete = (id) => {
    this.setState(
      {
        entries: [...this.state.entries.filter((data) => data.id !== id)],
        EatenBurgers: [...this.state.EatenBurgers.filter((data) => data.id !== id)],
      },
      this.inyourtummy(),
      this.findYourBurgers()
    );
  };
  

  AddthisEntry = (entry) => {
    const newentry = {
      id: uuid(),
      entry,
      eaten: false,
      computer: sessionStorage.getItem("id"),
    };

    this.setState({ entries: [...this.state.entries, newentry] });

    this.setState({
      FilteredBurgers: [...this.state.FilteredBurgers, newentry],
    });
  };

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

          <div>
            <div>
              <ul>
                <Burgercontainer
                  burgersmade={this.state.FilteredBurgers}
                  whatWeHave={this.state.entries}
                  changetoeaten={this.changetoeaten}
                />
              </ul>
            </div>
          </div>

          <div>
            <div>
              <h1>Burgers Eaten</h1>
              <ul>
                {" "}
                <ul>
                  <Tummy
                    EatenBurgers={this.state.EatenBurgers}
                    delete={this.delete}
                  />
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
