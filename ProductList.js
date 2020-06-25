import React, { Component } from 'react';
import { render } from 'react-dom';
import {Product} from './Product';

export default class ProductList extends Component{
  constructor() {
    super();
    this.state = {
      tshirts: [{
        id: 1,
        bname: 'adidas',
        cost : '2000',
        title: 'Wow tshirt' 
      },{
        id: 2,
        bname: 'Nike',
        cost : '3000',
        title: 'Nike Jeans' 
      },{
        id: 3,
        bname: 'Redtape',
        cost : '500',
        title: 'Amazing' 
      }
      ]
    };
  }

  render(){
    return (
      <ul>{
           this.state.tshirts.map((item) => {
             return <Product key={item.id} name={item.bname} cost={item.cost} title={item.title}/>
          })
        }
        </ul>
    )
  }
}