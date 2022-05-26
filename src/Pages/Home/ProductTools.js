import React from 'react';
import { Link } from 'react-router-dom';
import useUsers from './hooks/UseTools';
import '../Home/Tools.css'

const ProducTools = ({ user, handleControl }) => {
    // console.log(user)
    const { _id, name, img, price, description, quantity, Information } = user || {};
    const handleProductDelete = id => {
        const proced = window.confirm('Are You Sure? You Want to Delete?')

        if (proced) {
            console.log('delete id', id)
            const url = `https://rocky-reef-06077.herokuapp.com/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted');
                        handleControl();
                        const remaining = useUsers.filter(user => user._id !== id);
                    }
                })
        }

    }
    return (
        <div className='' >

            <div class="card card-compact w-96 bg-base-100 shadow-xl toolsCard">
                <figure><img src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>{Information}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>


            {/* 
            <Button onClick={() => handleProductDelete(user._id)} className='btn btn-danger me-'>Delete</Button> */}
        </div>
    );
};

export default ProducTools;