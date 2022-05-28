import React from 'react';

const Review = ({ review }) => {
    return (
        <div className='mt-20'>
            <h2 className='mt-5 text-2xl font-bold'>User Reviews</h2>
            <div className='grid grid-cols-3 gap-4'>

                <div className="card w-96 bg-base-100 shadow-xl ">
                    <div className="card-body">
                        <h2 className="card-title">Loreka</h2>
                        <p>Peer review sites are probably what you think of when you think of customer reviews. These include Google reviews, Facebook reviews, Yelp, Amazon, or G2  Crowd (if you’re a software company). </p>
                        <div className="card-actions justify-end">

                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl ">
                    <div className="card-body">
                        <h2 className="card-title">Bulbuli topul</h2>
                        <p>Peer review sites are probably what you think of when you think of customer reviews. These include Google reviews, Facebook reviews, Yelp, Amazon, or G2  Crowd (if you’re a software company). </p>
                        <div className="card-actions justify-end">

                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl ">
                    <div className="card-body">
                        <h2 className="card-title">Kala Chasma</h2>
                        <p>Peer review sites are probably what you think of when you think of customer reviews. These include Google reviews, Facebook reviews, Yelp, Amazon, or G2  Crowd (if you’re a software company). </p>
                        <div className="card-actions justify-end">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;