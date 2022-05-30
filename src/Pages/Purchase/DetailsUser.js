import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const PurchasePage = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [part, setPart] = useState({})
    const [user] = useAuthState(auth)
    const { id } = useParams()


    const [status, setStatus] = useState(false)

    useEffect(() => {
        if (errors.quantity?.type === 'min' || errors.quantity?.type === 'max') {
            setStatus(true)
        }
        else {
            setStatus(false)
        }
    }, [errors.quantity?.type, status])



    useEffect(() => {

        fetch(`http://localhost:5000/tools/${id}`)

            .then(res => res.json())
            .then(data => setPart(data))

    }, [id])

    const onSubmit = async (data) => {


        const order =
        {

            email: user.email,
            street: data.street,
            city: data.city,
            number: data.number,
            quantity: data.quantity,
            price: (data.quantity) * part.price,


        }



        fetch('http://localhost:5000/tools', {

            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(order),
        })
            .then((response) => response.json())
            .then((data) => {

                toast.success(`Your order done!, ${part.name}`)
            });


    };
    return (
        <div className='bg-[#677E81] py-10'>
            <div className='md:w-[70%] mx-auto p-3'>
                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-5'>

                    <div className='card shadow-2xl border md:p-10 p-3'>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control">

                                <div className="form-control">
                                    <input
                                        {...register("name")}
                                        defaultValue={user?.displayName}
                                        disabled
                                        type="name"
                                        className="input input-bordered mb-3" />
                                </div>
                            </div>

                            <div className="form-control">
                                <input
                                    {...register("email")}
                                    defaultValue={user?.email ? user?.email : 'Email not found'}
                                    disabled
                                    type="name"
                                    className="input input-bordered mb-3" />
                            </div>

                            <div className="form-control">

                                <input
                                    type="number"
                                    placeholder={`Enter Quantity (${part.ordered_quantity}-${part.available})`}
                                    className="input input-bordered"
                                    {...register("quantity", {
                                        required: {
                                            value: true,
                                            message: 'Quantity is Required'
                                        },
                                        min: {
                                            value: `${part.ordered_quantity}`,
                                            message: `Min order limit is ${part.ordered_quantity}`
                                        },
                                        max: {
                                            value: `${part.available}`,
                                            message: `Max order limit is ${part.available}`
                                        }

                                    })}
                                />

                                <label className="label">
                                    {errors.quantity?.type === 'required' && <span className="label-text-alt text-warning">{errors.quantity?.message}</span>}
                                    {errors.quantity?.type === 'min' && <span className="label-text-alt text-warning">{errors.quantity?.message}</span>}
                                    {errors.quantity?.type === 'max' && <span className="label-text-alt text-warning">{errors.quantity?.message}</span>}

                                </label>
                            </div>


                            <div className="form-control">


                                <input
                                    {...register("street", {
                                        required: {
                                            value: true,
                                            message: 'Street is Required'
                                        },

                                    })}
                                    type="street"
                                    placeholder="Enter your street"
                                    className="input input-bordered" />

                                <label className="label">
                                    {errors.street?.type === 'required' && <span className="label-text-alt text-warning">{errors.street?.message}</span>}

                                </label>

                            </div>
                            <div className="form-control">


                                <input
                                    {...register("city", {
                                        required: {
                                            value: true,
                                            message: 'City/Town is Required'
                                        },

                                    })}
                                    type="text"
                                    placeholder="Enter your city/town"
                                    className="input input-bordered" />

                                <label className="label">
                                    {errors.city?.type === 'required' && <span className="label-text-alt text-warning">{errors.city?.message}</span>}

                                </label>

                            </div>
                            <div className="form-control">



                                <input
                                    {...register("number", {
                                        required: {
                                            value: true,
                                            message: 'Phone Number is Required'
                                        },

                                    })}
                                    type="number"
                                    placeholder="Enter your phone number"
                                    className="input input-bordered" />

                                <label className="label">
                                    {errors.number?.type === 'required' && <span className="label-text-alt text-warning">{errors.number?.message}</span>}

                                </label>

                            </div>

                            <div className='text-center'>
                                <input disabled={status} type="Submit" value='Purchase' className="btn text-white px-12 rounded-full" />
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchasePage;