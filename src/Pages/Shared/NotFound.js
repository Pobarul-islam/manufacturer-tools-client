import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center pt-20'>
            <div>
                <h1 className='md:text-[200px] text-5xl font-extrabold text-cyan-500'>404</h1>
                <p className='text-center'> OOPS! PAGE NOT FOUND </p>
                <p className='text-center'>Sorry, the page you're looking for doesn't exist.</p>
            </div>
            <div className='my-5'>
                <Link to='/' type="button" className='btn rounded-full' >Return To Home</Link>
            </div>
        </div>
    );
};

export default NotFound;