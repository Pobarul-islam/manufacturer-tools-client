import React, { useEffect, useState } from 'react';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/Orders`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const deleteOrder = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/tools/Order/${id}`, {
            method: 'delete'
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div className='grid p-10 '>
            <div className="overflow-x-auto grid  ">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th />
                            <th>Image</th>
                            <th>Email</th>
                            <th>product</th>
                            <th>Price</th>
                            <th>TotalPrice</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            orders.map((order, index) => <tr key={order._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="w-16 rounded-xl">
                                            <img src={order.image} />
                                        </div>
                                    </div>
                                </td>
                                <td>{order.email}</td>
                                <th>{order.name}</th>
                                <td>{order.price}</td>
                                <td>{order.totalPrice}</td>
                                <td>
                                    <button className='btn mr-3 btn-primary'>Pay</button>
                                    <button onClick={() => deleteOrder(order._id)} className='btn ml-2 btn-error'>Delete</button>
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrders;