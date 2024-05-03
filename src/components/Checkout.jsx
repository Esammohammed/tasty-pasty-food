import React, { useContext, useState } from 'react';
import { CartContext } from '../store/shopping-crt-context';
import Input from './Input';
import {saveOrder}  from '../http'
export default function Checkout({handleIsCheckoutClose, clearCart}) {
    const { items } = useContext(CartContext);
    const [orderStatus, setOrderStatus] = useState('');
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        street: '',
        'postal-code': '',
        city: ''
    });
    function onChangeHandler(name, event) {
        setFormData({
            ...formData,
            [name]: event.target.value
        });
    }
    async function onSubmitHandler(event) {
        event.preventDefault();
        
        const orderInfo = {
            items: items,
            customer: formData
        }

        const status = await (saveOrder(orderInfo));
        if (status === 'success') {
            setTimeout(() => {
                clearCart();
                handleIsCheckoutClose();
            }, 2000);
        }
        setOrderStatus(status);


        
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <h2>Checkout</h2>
        
        
            <p>Total: {total}</p>
            <Input
                name="name"
                type="text"
                placeholder="Full Name"
                required
                
                onChange={onChangeHandler}

            />

            <Input
                name="email"
                type="email"
                placeholder="E-Mail Address"
                onChange={onChangeHandler}
                required

            />

            <Input
                name="street"
                type="text"
                placeholder="Street"
                onChange={onChangeHandler}
                required

            />

            <div className='control-row'>
                <Input
                    name="postal-code"
                    type="text"
                    placeholder="Postal Code"
                    onChange={onChangeHandler}
                    required

                />

                <Input
                    name="city"
                    type="text"
                    placeholder="City"
                    onChange={onChangeHandler}
                    required

                />
            </div>

            <div className='cart-handler'>
                <button type= 'button' onClick={handleIsCheckoutClose} >Cancel</button>
                <button type='submit'> Confirm </button>
            </div>
            {orderStatus === 'success' && 
            <div style={{ backgroundColor: 'green', color: 'white', padding: '10px', marginTop: '10px' }}>Order placed successfully!</div>}
            {orderStatus === 'failed' && <div style={ { backgroundColor: "#B00020", color: 'white', padding: '10px', marginTop: '10px' } }>Missing Data or Something went wrong. Please try again later.</div>}   
                 </form>
    );
}