import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h2>Product: { }</h2>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>
                {
                    products.slice(0, 6).map(product => <Product
                        key={product._id}
                        product={product}

                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;