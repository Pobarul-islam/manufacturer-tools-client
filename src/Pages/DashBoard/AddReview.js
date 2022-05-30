import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
const AddReview = () => {
    const [user, Loading] = useAuthState(auth)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        const image = user.photoURL
        const ratingData = { ...data, image }
        fetch('http://localhost:5000/review', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ratingData)
        }).then(res => {
            toast.success('review Added')
            reset()
        })

    };
    return (
        <div className=' py-10 h-screen '>
            <h1 className='text-2xl text-center text-white mb-3 uppercase'>Please add a review </h1>
            <div className='w-[30%] mx-auto card shadow-2xl border sm:w-full md:p-10 p-3'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white font-semibold">Name</span>
                        </label>
                        <input
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                },

                            })}
                            type="name"
                            placeholder="Enter your name"
                            className="input input-bordered" />

                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-warning">{errors.name?.message}</span>}

                        </label>

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white font-semibold">Review</span>
                        </label>

                        <textarea
                            {...register("review", {
                                required: {
                                    value: true,
                                    message: 'Review is Required'
                                },

                            })}
                            type="review"
                            placeholder="Enter your review"
                            className="input input-bordered" />

                        <label className="label">
                            {errors.review?.type === 'required' && <span className="label-text-alt text-warning">{errors.review?.message}</span>}

                        </label>

                    </div>
                    <div className="form-control">

                        <label className="label">
                            <span className="label-text text-white font-semibold">Ratings</span>
                        </label>

                        <input
                            {...register("ratings", {
                                required: {
                                    value: true,
                                    message: 'Ratings is Required'
                                },

                            })}
                            type="number"
                            placeholder="Enter your ratings"
                            className="input input-bordered" />

                        <label className="label">
                            {errors.ratings?.type === 'required' && <span className="label-text-alt text-warning">{errors.ratings?.message}</span>}

                        </label>

                    </div>

                    <div className="avatar">
                        <div className="w-16 rounded-full">
                            <img src={user.photoURL} />
                        </div>
                    </div>

                    <div className='text-center'>
                        <input type="Submit" value='add' className="btn text-white px-12 rounded-full" />
                    </div>
                </form>
            </div>

        </div>
    )
};

export default AddReview;