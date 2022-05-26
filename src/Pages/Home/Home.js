import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Review from './Review';
import Tools from './Tools';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <div className='ml-10'>
                <Tools></Tools>
                <BusinessSummary></BusinessSummary>
                <Review></Review>

            </div>
            <div>
                <Footer></Footer>
            </div>


        </div>
    );
};

export default Home;