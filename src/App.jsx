import React from 'react';
import Header from './components/Header';

import Products from './components/products';
import { useContext,useState, useEffect } from 'react';
import { CartContext } from './store/shopping-crt-context';

import {getFoodProducts} from './http';
import Cart from './components/Cart';
import Modal from './components/Modal';
import Checkout from './components/Checkout';
function App() {
  const [shopProducts, setShopProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [shoppingCart, setShoppingCart] = useState( [] );
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  

  function clearCart() {
    setShoppingCart([]);
  }
  useEffect(() => {

      getFoodProducts().then((data) => {
          setShopProducts(data)
          setLoading(false)
      })
      // console.log(products)
  }, [])

  function handleAddItemToCart (id) {

    // IF THE ITEM IS ALREADY IN THE CART, INCREASE THE QUANTITY
    const itemInCart = shoppingCart.find((item) => item.id === id);

    if (itemInCart) {
      handleIncreasingCartQuantity (id)
    }
    else {
      const item = shopProducts.find((item) => item.id === id);
      const newItem = { ...item, quantity: 1 };
      setShoppingCart((prev) => ([ ...prev, newItem]));
    }

  }

  function handleIncreasingCartQuantity(id) {
    const itemInCart = shoppingCart.find((item)=> item.id === id);
    const updatedItem = { ...itemInCart, quantity: itemInCart.quantity + 1 };
    const updatedCart = shoppingCart.map((item) => (item.id === id ? updatedItem : item));
    setShoppingCart(updatedCart);

  }

  function handleDecreasingCartQuantity(id) {
    const itemInCart = shoppingCart.find((item) => item.id === id);
    if (itemInCart.quantity === 1) {
      handleRemoveItemFromCart(id);
    }
    else {
      const updatedItem = { ...itemInCart, quantity: itemInCart.quantity - 1 };
      const updatedCart = shoppingCart.map((item) => (item.id === id ? updatedItem : item));
      setShoppingCart(updatedCart);
    }
  } 
  function handleRemoveItemFromCart(id) {
    const updatedCart = shoppingCart.filter((item) => item.id !== id);
    setShoppingCart(updatedCart);
  }

  function handleIsModalOpen() {
    setIsCartOpen(true);
  }

  function handleIsModalClose() {
    setIsCartOpen(false);
  }

  function handleIsCheckoutOpen() {
    console.log('checkout')
    setIsCartOpen(false);
    setIsCheckout(true);
  }
  function handleIsCheckoutClose() {
    setIsCheckout(false);
  }
  const ctxValue = {
    items: shoppingCart,
    handleAddItemToCart: handleAddItemToCart,
    handleIncreasingCartQuantity: handleIncreasingCartQuantity,
    handleDecreasingCartQuantity: handleDecreasingCartQuantity,
  };


  return (
    <CartContext.Provider value={ctxValue}>

      <Header handleIsModalOpen = {handleIsModalOpen}/>
     
      
        <Products loading={loading} products = {shopProducts}/>
      <Modal open ={isCartOpen} onClose={handleIsModalClose} >
        <Cart products={shoppingCart} handleIsCartClose={handleIsModalClose} handleIsCheckoutOpen= {handleIsCheckoutOpen}/>

      </Modal>
      <Modal open ={isCheckout} onClose={handleIsModalClose} >
        <Checkout handleIsCheckoutClose = {handleIsCheckoutClose}  clearCart={clearCart}/>
      </Modal>
     
    </CartContext.Provider>
  );
}

export default App;
