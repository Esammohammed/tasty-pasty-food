import React, {useContext,useState} from 'react'
import Product from './Product';
import { CartContext } from '../store/shopping-crt-context';

export default function Products({loading,products}) {

 

    return (
        <div id="meals">
            {loading ? <p>Loading...</p> : products.map((product) => {
                return (
                    <div className="meals" key={product.id}>
                        <Product 
                        img= {product.image}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                        id={product.id} />
                    </div>
                )
            })}
        </div>

    )

}