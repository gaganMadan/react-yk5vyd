import React, { Component } from 'react';
import { render } from 'react-dom';

import ProductList from './ProductList';
import {Cart} from './Cart';

import {CartProvider} from './CartContext';

import './style.css';

class App extends Component {
  
  render() {
    return (
     <CartProvider>
        <Cart />
        <ProductList/>
        
        
     </CartProvider>
    );
  }
}

render(<App />, document.getElementById('root'));
