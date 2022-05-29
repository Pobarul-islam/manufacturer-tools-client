import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const navigate = useNavigate();
    const { _id, name, img, description, MinimumOrder
        , Available, PerPrice } = product;


    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl w-20" />
            </figure>
            <div className="card-body items-center text-center">

                <h2 className="card-title">Name: {name}</h2>
                <p>Description: {description}</p>
                <p>MinimumOrder: {MinimumOrder}</p>
                <p>Available: {Available}</p>
                <p>PerPrice: {PerPrice}</p>
                <div className="card-actions">
                    <Link to={`/purchase/${_id}`} className="btn bg-blue-900 rounded-full px-10">Buy Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Product;