import React from 'react';
import { Link } from 'react-router-dom';
import useUsers from './hooks/UseTools';
import '../Home/Tools.css'

const ProducTools = ({ user, handleControl }) => {
    // console.log(user)
    const { _id, name, img, Available, description, MinimumOrder, PerPrice, Information } = user || {};
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
        <div>

            <div className='mt-20' >
                <div className="card card-compact w-96 bg-base-100 shadow-xl toolsCard">
                    <figure><img className='w-20' src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Name: {name}</h2>
                        <p>Information: {Information}</p>
                        <p>Minimun Order: {MinimumOrder}</p>
                        <p>Available: {Available}</p>
                        <p>Per Price: {PerPrice}</p>
                        <p>{description}</p>

                        <div className="card-actions justify-center">
                            <Link to="/purchase" className="btn btn-primary">Buy Now</Link>
                        </div>
                    </div>
                </div>


                {/* 
            <Button onClick={() => handleProductDelete(user._id)} className='btn btn-danger me-'>Delete</Button> */}
            </div>
        </div>
    );
};

export default ProducTools;