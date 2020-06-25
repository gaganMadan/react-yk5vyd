import React, {useState} from 'react';


export const CartContext = React.createContext();

export const CartProvider = (props) => {
 const [item, setItem] = useState([]);
 //console.log(item);
 //console.log(setItem);
  return (
    <CartContext.Provider value={[item, setItem]}>
       {props.children}
    </CartContext.Provider>
  )
}








