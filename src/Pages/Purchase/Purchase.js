import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {

    const { id } = useParams();
    console.log(id)
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src="" alt="Shoes" class="rounded-xl w-20" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <p>Product id { }</p>
                        <h2 class="card-title">Name: { }</h2>
                        <p>Description: { }</p>
                        <p>MinimumOrder: { }</p>
                        <p>Available: { }</p>
                        <p>PerPrice: { }</p>
                        <div class="card-actions">
                            <button class="btn btn-primary">Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;