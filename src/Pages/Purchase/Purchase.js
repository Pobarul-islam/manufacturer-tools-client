import React, { useEffect, useState } from 'react';
const Purchase = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
            <h2>Product {product.length}</h2>
        </div>
    );
};

export default Purchase;