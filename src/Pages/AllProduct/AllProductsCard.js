import React from 'react';
import { Link } from 'react-router-dom';

const AllProductsCard = ({ allProduct }) => {
    const { name, description, img, MinimumOrder, Available, PerPrice } = allProduct
    return (
        <div>

            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Shoes" class="rounded-xl w-10" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p>Description: {description}</p>
                    <p>MinimumOrder: {MinimumOrder}</p>
                    <p> Available: {Available}</p>
                    <p>PerPrice: {PerPrice}</p>
                    <div class="card-actions">
                        <Link to="/purchase/:id" class="btn btn-primary">Buy Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProductsCard;