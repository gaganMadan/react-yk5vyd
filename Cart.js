import React, {useContext} from 'react'
import {CartContext} from './CartContext'

export const Cart = () => {
  const [item, setItem] = useContext(CartContext);
 
  const totalCost = item.reduce((acc, i) =>  acc + parseInt(i.cost), 0);
  
  return (

    <div>
      <span>Item in a cart : {item.length}</span><br />
      <span>total prise:{totalCost} </span><br />
    </div>
  )
}