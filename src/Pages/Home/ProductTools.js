import React from 'react';
import { useNavigate } from 'react-router-dom';
import InfoCard from './InfoCard';
import ProductCard from './ProductCard';

const ProductTools = ({ tool }) => {
    const navigate = useNavigate();
    const { _id, img, description, name, price, available } = tool;
    console.log(tool)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='w-20' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    {/* <button onClick={handleOrder} className="btn btn-primary">Order Now</button> */}
                </div>
            </div>
        </div>
    );
};

export default ProductTools;