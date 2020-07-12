import React, { Component } from "react";
import MakeABurger from "./pages/MakeABurger.js";
import Burgercontainer from "./pages/Burgercontainer.js";
import Tummy from "./pages/Tummy.js";
import "./App.css";
import { v4 as uuid } from "uuid";
import API from "./util/API";

class App extends Component {
  state = {
    FilteredBurgers: [],
    EatenBurgers: [],

    entries: [],
  };

  // componentDidMount = () => {
  //   API.getBurgers()
  //   .then((res) => this.setState({entries:res.data}),

  //   this.findYourBurgers(),
  //   this.inyourtummy()
  //   )
  // };

  componentDidMount = () => {
    let p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(API.getBurgers());
      }, 1);
    });

    p.then((result) => {
      this.setState({ entries: result.data });
      console.log("hi ", this.state.entries);
      return result;
    })
      .then((result) => {
        this.findYourBurgers();
        console.log("What is the result", result);
        return result;
      })
      .then((result) => {
        this.inyourtummy();
        console.log(result);
        return result;
      });
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
    console.log("This is the id...", id);
    API.changeBurger(id);
    this.setState(
      {
        entries: this.state.entries.map((data) => {
          if (data._id === id) {
            data.eaten = true;
          }
          console.log(data.eaten);
          return data;
        }),
      },
      this.inyourtummy(),
      this.findYourBurgers()
    );
  };

  delete = (id) => {
    API.deleteBurger(id);
    this.setState(
      {
        entries: [...this.state.entries.filter((data) => data._id !== id)],
        EatenBurgers: [
          ...this.state.EatenBurgers.filter((data) => data._id !== id),
        ],
      },
      this.inyourtummy(),
      this.findYourBurgers()
    );
  };

  // AddthisEntry = (entry) => {
  //   const newentry = {
  //     entry,
  //     eaten: false,
  //     computer: sessionStorage.getItem("id"),
  //   };
  //   let f = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(API.saveBurger(newentry)), API.getBurgers();
  //     }, 1);
  //   });
  //   f.then((result) => {
  //     this.setState({ entries: result.data });
  //     return result;
  //   })
  //     .then(() => {
  //       console.log(this.state.entries);
  //       this.findYourBurgers();
  //     })
  //     .then(() => {
  //       this.setState(
  //         {
  //           FilteredBurgers: [...this.state.FilteredBurgers],
  //         },
  //         this.inyourtummy(),
  //         this.findYourBurgers()
  //       );
  //     });
  // };

  AddthisEntry = (entry) => {
    const newentry = {
      entry,
      eaten: false,
      computer: sessionStorage.getItem("id"),
    };

    API.saveBurger(newentry);
    API.getBurgers()

      .then((result) => {
        this.setState({ entries: result.data });
      })
      .then(() => {
        console.log(this.state.entries);
        this.findYourBurgers();
      })
      .then(() => {
        this.setState(
          {
            FilteredBurgers: [...this.state.FilteredBurgers],
          },
          this.inyourtummy(),
          this.findYourBurgers()
        );
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
