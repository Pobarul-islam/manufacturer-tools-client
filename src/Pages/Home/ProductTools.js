import React from 'react';
import InfoCard from './InfoCard';
import ProductCard from './ProductCard';

const ProductTools = ({ tool }) => {
    return (
        <div className='grid grid-cols-3 gap-4'>
            <ProductCard tool={tool} />
        </div>
    );
};

export default ProductTools;