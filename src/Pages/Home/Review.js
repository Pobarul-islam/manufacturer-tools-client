import React from 'react';

const Review = () => {
    return (
        <div className='text-center mt-20'>
            <p className='text-2xl'>Coustomer</p>
            <progress class="progress progress-secondary w-96 h-5" value="88" max="100"></progress> <br />
            <p className='text-2xl'>Services</p>
            <progress class="progress progress-secondary w-96 h-5" value="10" max="100"></progress> <br />
            <p className='text-2xl'>Service Point</p>
            <progress class="progress progress-secondary w-96 h-5" value="40" max="100"></progress> <br />
            <p className='text-2xl'>Review</p>
            <progress class="progress progress-secondary w-96 h-5" value="70" max="100"></progress> <br />
            <p className='text-2xl'>Revinue</p>
            <progress class="progress progress-secondary w-96 h-5" value="100" max="100"></progress> <br />
        </div>
    );
};

export default Review;