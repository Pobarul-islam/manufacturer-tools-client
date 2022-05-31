import React, { useEffect, useState } from 'react';
import AllProductsCard from './AllProductsCard';

const AllProduct = () => {
    const [allProducts, setAllProducts] = useState([])
    useEffect(() => {
        fetch('https://salty-oasis-53034.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])
    return (

        <div className='mt-5'>
            <h2 className='text-center text-4xl font-bold mt-4'>All Products</h2>
            <div className='grid gap-5 grid-cols-3 ml-10'>
                {
                    allProducts.map(allProduct => <AllProductsCard
                        key={allProduct}
                        allProduct={allProduct}

                    ></AllProductsCard>)
                }
            </div>
        </div>
    );
};

export default AllProduct;