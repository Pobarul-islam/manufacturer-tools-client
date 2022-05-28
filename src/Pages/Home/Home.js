import React from 'react';
import Products from '../Products/Products';
import Banner from './Banner';
import Footer from './Footer';
import Info from './Info';
// import ProducTools from './ProductTools';

import Review from './Review';
// import Tools from './Tools';


const Home = () => {
    return (
        <div className='px-12 w-full'>
            <Banner></Banner>
            <Info></Info>
            <Review></Review>
            <Products></Products>

            {/* <Tools></Tools>
            <ProducTools></ProducTools> */}

            <Footer></Footer>
        </div>
    );
};

export default Home;