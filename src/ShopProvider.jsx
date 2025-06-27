import React, { useState, } from 'react';
import { ShopContext } from './ShopContext';

export const ShopProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [totalItems, setTotalItems] = useState(0);

  const addToCart = (id) => {
    setCartItems(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const removeFromCart = (id) => {
    setCartItems(prev => {
      const newCart = { ...prev };
      if (newCart[id] > 1) {
        newCart[id] -= 1;
      } else {
        delete newCart[id];
      }
      return newCart;
    });
  };

  

  return (
    <ShopContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      searchTerm,
      setSearchTerm,
      totalItems,
      setTotalItems
    }}>
      {children}
    </ShopContext.Provider>
  );
};
