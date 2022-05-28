import React from 'react';

const Product = ({ product }) => {
    const { _id, name, img, description, MinimumOrder
        , Available, PerPrice } = product;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl w-20" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">Name: {name}</h2>
                <p>Description: {description}</p>
                <p>MinimumOrder: {MinimumOrder}</p>
                <p>Available: {Available}</p>
                <p>PerPrice: {PerPrice}</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;