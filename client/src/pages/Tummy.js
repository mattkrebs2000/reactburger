import React, { Component } from 'react'

class Tummy extends Component {

    render() {
        return (
          <div>
            <ul>
              {this.props.EatenBurgers && this.props.EatenBurgers.map((info) => (
                <li>{info.entry} burger <button id={info.id} onClick={()=>this.props.delete(info.id)}>
                    Poop it!
                  </button>
                </li>
              ))}
            </ul>
          </div>
        );
    }
}
export default Tummy; 