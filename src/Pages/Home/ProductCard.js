import React from 'react';
import { useNavigate } from 'react-router-dom';
import Tools from './Tools';

const ProductCard = ({ tool }) => {
    const navigate = useNavigate();
    const { _id, img, description, name, price, available } = tool;

    return (
        <div className=''>

        </div>

    );
};

export default ProductCard;