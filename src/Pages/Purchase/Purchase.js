import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Order from './Order';
import DetailsUser from './DetailsUser';

const Purchase = () => {
    const { id } = useParams();
    const [products, setProducts] = useState({})
    useEffect(() => {
        fetch(`https://salty-oasis-53034.herokuapp.com/tools/${id}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const [show, setShow] = useState(false)

    return (
        <div>
            <div className="hero py-14 items-start bg-base-200 grid ">
                <div className="hero-content flex-col items-center lg:flex-row">
                    <img src={products.img} className="max-w-lg  rounded-lg shadow-2xl" alt='' />
                    <div className='lg:ml-10'>
                        <h1 className="text-3xl font-bold">{products.name}</h1>
                        <p className='mt-5 font-bold text-neutral'>Price : ${products.PerPrice}</p>
                        <p className='mt-5 font-bold text-neutral'>Quantity : {products.Available} p</p>
                        <p className='mt-5 font-bold text-neutral'>Min Order : {products.MinimumOrder} p</p>
                        <p className="py-6">{products.description}</p>
                        <button onClick={() => setShow(true)} className="btn btn-primary">Order Now</button>
                    </div>
                </div>
            </div>
            {
                show && <Order product={products} show={show} setShow={setShow} />
            }

            <DetailsUser></DetailsUser>
        </div>
    );
};

export default Purchase;




