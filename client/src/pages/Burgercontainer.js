import React, { Component } from 'react'

class Burgercontainer extends Component {
    render() {
         console.log(this.props.items[1].entry);
        return (

            <div>
             {this.props.items.map((info)=><li>{info.entry} burger </li>)}
            </div>
        )
    }
}
export default Burgercontainer;
