import React, {useContext} from 'react'
import { CartContext } from '../store/shopping-crt-context';
export default function Product({img, name, price, description, id}) {
    
    const {handleAddItemToCart} = useContext(CartContext)
    return  (
        <div className="meal-item">
            <article>
                <img src={`http://localhost:3000/${img}`} alt="meal" />
                <h3>{name}</h3>
                <h2 className="meal-item-price"> {price}</h2>
                <p className="meal-item-description" >{description} </p>
                <button onClick={()=>handleAddItemToCart(id) }className="button">Add to Cart</button>
            </article>
        </div>

    )
}