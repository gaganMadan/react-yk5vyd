import React, { Component, useContext } from 'react';
import { render } from 'react-dom';
import {CartContext} from './CartContext'

// export default ({ id, name, cost }) => (
//   <p>
//     <h1>Hello {name}! </h1>
//     <h2>{cost}</h2>
//     <button type="text">Move To Cart</button>
//   </p>
// )

export const Product = (props) => {
  
  
const [item, setItem] = useContext(CartContext);

  
  const onClick = (e) => {
    const newItem = {name: props.name, cost: props.cost, title: props.title}
    setItem(curr => [...curr, newItem ])
  }
 
   //const { id, name, cost, title }  = this.props;
  return (
      <div>
        <h1> {props.name} </h1>
        <h2> {props.cost} </h2>
        <button type="text" onClick={onClick}>Move To Cart</button>
      </div>
    )
  
 
}

// export default class Product extends Component{

//     static contextType = CartContext
    
//     onClick = (e) => {
//       const [item, setItem] = this.context;
//       const newItem = {name: this.props.name, cost: this.props.cost, title: this.props.title}
//       setItem(curr => [...curr, newItem ])
//     }

//     render (){
//       //console.log(this.context);
      
//       const { id, name, cost, title }  = this.props;
//       return (
//         <div>
//           <h1> {name} </h1>
//           <h2> {cost} </h2>
//           <button type="text" onClick={this.onClick}>Move To Cart</button>
//         </div>
//       )
//     }
// }


