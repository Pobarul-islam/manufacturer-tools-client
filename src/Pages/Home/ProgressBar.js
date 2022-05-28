import React from 'react';

const ProgressBar = () => {
    return (
        <div className='mt-10'>
            <progress class="progress progress-warning w-56" value="0" max="100"></progress>
            <progress class="progress progress-warning w-56" value="10" max="100"></progress>
            <progress class="progress progress-warning w-56" value="40" max="100"></progress>
            <progress class="progress progress-warning w-56" value="70" max="100"></progress>
            <progress class="progress progress-warning w-56" value="100" max="100"></progress>
        </div>
    );
};

export default ProgressBar;