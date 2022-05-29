import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
;



const AddParts = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorageKey = 'a2cd64019cccf28bed5435da894d04f9'


    const onSubmit = async (data) => {

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {



                if (result.success) {

                    const img = result.data.url;

                    const parts =
                    {

                        name: data.name,
                        img: img,
                        email: data.email,
                        price: data.price,
                        ordered_quantity: data.quantity,
                        available: data.available,
                        description: data.description

                    }

                    const url = `   https://evening-temple-70912.herokuapp.com/parts`;
                    fetch(url, {

                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(parts),
                    })
                        .then((res) => {
                            res.json()
                        })
                        .then(data => {
                            toast.success('Parts added successfully')
                            reset();
                        })

                }
            })


    };

    return (
        <div className='bg-[#677E81] py-10 h-screen'>
            <h1 className='text-2xl text-center text-white mb-3 uppercase'>Please add parts</h1>
            <div className='w-[40%]  mx-auto card shadow-2xl border md:p-10 p-3'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control">

                        <input
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                },

                            })}
                            type="name"
                            placeholder="Enter parts name"
                            className="input input-bordered" />

                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-warning">{errors.name?.message}</span>}

                        </label>

                    </div>

                    <div className="form-control">

                        <textarea
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: 'Description is Required'
                                },

                            })}
                            type="description"
                            placeholder="Enter parts description"
                            className="input input-bordered" />

                        <label className="label">
                            {errors.description?.type === 'required' && <span className="label-text-alt text-warning">{errors.description?.message}</span>}

                        </label>

                    </div>

                    <div className="form-control">


                        <input
                            {...register("price", {
                                required: {
                                    value: true,
                                    message: 'Price is Required'
                                },

                            })}
                            type="number"
                            placeholder="Enter parts price"
                            className="input input-bordered" />

                        <label className="label">
                            {errors.price?.type === 'required' && <span className="label-text-alt text-warning">{errors.price?.message}</span>}

                        </label>

                    </div>
                    <div className="form-control">


                        <input
                            {...register("quantity", {
                                required: {
                                    value: true,
                                    message: 'Quantity is Required'
                                },

                            })}
                            type="number"
                            placeholder="Enter min quantity"
                            className="input input-bordered" />

                        <label className="label">
                            {errors.quantity?.type === 'required' && <span className="label-text-alt text-warning">{errors.quantity?.message}</span>}

                        </label>

                    </div>
                    <div className="form-control">


                        <input
                            {...register("available", {
                                required: {
                                    value: true,
                                    message: 'Available is Required'
                                },

                            })}
                            type="number"
                            placeholder="Enter available quantity"
                            className="input input-bordered" />

                        <label className="label">
                            {errors.available?.type === 'required' && <span className="label-text-alt text-warning">{errors.available?.message}</span>}

                        </label>

                    </div>



                    <div className="form-control ">

                        <label class="block">
                            <span class="sr-only">Choose profile photo</span>
                            <input
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'Image is Required'
                                    },

                                })}
                                type="file"
                                class="text-sm text-white text-bold 
                                    file:mr-4 file:py-2 file:px-4
                                    file:rounded-full file:border-0
                                    file:text-sm file:font-semibold
                                  file:bg-violet-50 file:text-violet-700
                                  hover:file:bg-violet-100"/>
                        </label>

                        <label className="label">
                            {errors.image?.type === 'required' && <span className="label-text-alt text-warning">{errors.image?.message}</span>}

                        </label>

                    </div>

                    <div className='text-center'>
                        <input type="Submit" value='Add' className="btn text-white px-12 rounded-full" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddParts;