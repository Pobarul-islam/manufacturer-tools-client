// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { toast } from 'react-toastify';
// const AddReview = () => {

//     const { register, formState: { errors }, handleSubmit, reset } = useForm();
//     const imageStorageKey = '0a59feb260123c2fe0c722a3e3da90f9';

//     const onSubmit = async (data) => {
    
              

//                     const img = result.data.url;

//                     const review =
//                     {

//                         name: data.name,
//                         review: data.review,
//                         img: img,
//                         ratings: data.ratings
//                     }
//                     if (data.ratings > 5 || data.ratings < 1) {
//                         toast('Please provide rating between 1 to 5')
//                         return;
//                     }
//                     fetch('', {

//                         method: 'POST',
//                         headers: {
//                             'Content-type': 'application/json',
//                         },
//                         body: JSON.stringify(review),
//                     })
//                         .then((res) => res.json())
//                         .then(inserted => {

//                             if (inserted.insertedId) {

//                                 toast.success('Review added successfully')

//                                 reset();
//                             }

//                             else {
//                                 toast.error('Failed to add the review');
//                             }
//                         })

//                 }
//             })

//     };

//     return (
//         <div className='bg-[#677E81] py-10 h-screen'>
//             <h1 className='text-2xl text-center text-white mb-3 uppercase'>Please add a review </h1>
//             <div className='w-[30%] mx-auto card shadow-2xl border md:p-10 p-3'>
//                 <form onSubmit={handleSubmit(onSubmit)}>

//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text text-white font-semibold">Name</span>
//                         </label>
//                         <input
//                             {...register("name", {
//                                 required: {
//                                     value: true,
//                                     message: 'Name is Required'
//                                 },

//                             })}
//                             type="name"
//                             placeholder="Enter your name"
//                             className="input input-bordered" />

//                         <label className="label">
//                             {errors.name?.type === 'required' && <span className="label-text-alt text-warning">{errors.name?.message}</span>}

//                         </label>

//                     </div>
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text text-white font-semibold">Review</span>
//                         </label>

//                         <textarea
//                             {...register("review", {
//                                 required: {
//                                     value: true,
//                                     message: 'Review is Required'
//                                 },

//                             })}
//                             type="review"
//                             placeholder="Enter your review"
//                             className="input input-bordered" />

//                         <label className="label">
//                             {errors.review?.type === 'required' && <span className="label-text-alt text-warning">{errors.review?.message}</span>}

//                         </label>

//                     </div>
//                     <div className="form-control">

//                         <label className="label">
//                             <span className="label-text text-white font-semibold">Ratings</span>
//                         </label>

//                         <input
//                             {...register("ratings", {
//                                 required: {
//                                     value: true,
//                                     message: 'Ratings is Required'
//                                 },

//                             })}
//                             type="number"
//                             placeholder="Enter your ratings"
//                             className="input input-bordered" />

//                         <label className="label">
//                             {errors.ratings?.type === 'required' && <span className="label-text-alt text-warning">{errors.ratings?.message}</span>}

//                         </label>

//                     </div>

//                     <div className="avatar">
//                         <div className="w-24 rounded-full">
//                             <img src="https://api.lorem.space/image/face?hash=92310" />
//                         </div>
//                     </div>

//                     <div className='text-center'>
//                         <input type="Submit" value='add' className="btn text-white px-12 rounded-full" />
//                     </div>
//                 </form>
//             </div>

//         </div>
//     );
// };

// export default AddReview;