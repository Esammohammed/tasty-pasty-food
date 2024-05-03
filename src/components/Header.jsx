
import logo from '../assets/logo.jpg';
import '../index.css'; // Import CSS file
import React, {useContext,useState} from 'react'
import { CartContext } from '../store/shopping-crt-context';

export default function Header({ handleIsModalOpen}) {
    const {items} = useContext(CartContext)
    let totalItems = 0
    for (let i = 0; i < items.length; i++) {
        totalItems += items[i].quantity
    }
    return (
        <div id="main-header">
            <div id = "title">
                <img src={logo} alt="logo" />
                <h1>Sasa Food</h1>
            </div>
            <div className='cart-icon'>
                <button className='button' onClick={handleIsModalOpen}>Cart {totalItems}</button>
            </div>
        </div>
    );
}