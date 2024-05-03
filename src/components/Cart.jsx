import React, { useContext } from 'react'
import { CartContext } from '../store/shopping-crt-context';
export default function Cart({handleIsCartClose, handleIsCheckoutOpen }) {
    const { items } = useContext(CartContext)
    const { handleAddItemToCart } = useContext(CartContext)
    const { handleDecreasingCartQuantity } = useContext(CartContext)
    const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0)

    return (
        <>
            <h2>Your Cart </h2>

            <ul>
                {items.map((product) => (

                    <li className="cart-item" key={product.id}>
                        <div className="cart-item-image">
                            <p>Name: {product.name}</p>
                            <p>Price: {product.price}$</p>
                            <p>Quantity: {product.quantity}</p>
                        </div>
                        <div className="cart-item-actions">
                            <button onClick={() => handleAddItemToCart(product.id)} >+</button>
                            <p>{product.quantity}</p>
                            <button onClick={() => handleDecreasingCartQuantity(product.id)}>-</button>
                        </div>

                    </li>
                ))}

            </ul>
            <div className="cart-total">
                <p>Total: {totalPrice}</p>
            </div>
            <div className='cart-handler' >
                <button onClick={handleIsCartClose} >Close</button>
                <button onClick= {handleIsCheckoutOpen}  >Go to checkout</button>
            </div>
        </>
    )


}