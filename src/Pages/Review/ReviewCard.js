import { Rating } from '@mui/material';
import React from 'react'
const ReviewCard = ({ review }) => {
    return (
        <div className="card w-20 bg-base-100 pt-5 shadow-2xl">
            <div className="card-body">
                <Rating
                    name="simple-controlled"
                    value={parseInt(review.ratings)}
                />
                <div className="flex items-center mt-3">
                    <div className="avatar">
                        <div className="w-16 rounded-full">
                            <img src={review?.image} alt={review.image} />
                        </div>
                    </div>
                    <div className="info ml-3">
                        <h2 className="card-title">{review?.name}</h2>
                    </div>
                </div>
                <p className='mt-5'>{review?.review?.length > 110 ? review.review.slice(0, 230) + '....' : review.review}</p>
            </div>
        </div>
    )
}

export default ReviewCard