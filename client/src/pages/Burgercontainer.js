import React, { Component } from 'react'

class Burgercontainer extends Component {
    render() {
     
        
        return (
            

            <ul>
             {this.props.burgersmade.map((info)=>
                
                
                <li>{info.entry} burger <button id={info.id} onClick={( )=>this.props.changetoeaten(info.id)}>Eat it</button></li>)}
           
            </ul>
            
        )
          
    }
  
}
export default Burgercontainer;
