import React from 'react';

const ProductCard = ({ tool }) => {

    return (
        <div className=''>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='w-20' src={tool?.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{tool?.name}</h2>
                    <p>{tool?.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Order Now</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProductCard;