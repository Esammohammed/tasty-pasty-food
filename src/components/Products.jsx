import getFoodProducts from '../http';
import { useEffect, useState } from 'react';
import Product from './Product';
export default function Products() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        getFoodProducts().then((data) => {

            setProducts(data)
            setLoading(false)
        })
        console.log(products)
    }, [])
    return (
        <div id="meals">
            {loading ? <p>Loading...</p> : products.map((product) => {
                return (
                    <div className="meals">
                        <Product 
                        img= {product.image}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                        key={product.id} />
                    </div>
                )
            })}
        </div>

    )

}