import React from 'react';
import logo from '../assets/logo.jpg';
import '../index.css'; // Import CSS file

export default function Header() {
    return (
        <div id="main-header">
            <div id = "title">
                <img src={logo} alt="logo" />
                <h1>React Food</h1>
            </div>

            <button>Cart</button>
        </div>
    );
}