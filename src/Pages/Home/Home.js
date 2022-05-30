import React from 'react';
import Products from '../Products/Products';
import Banner from './Banner';
import Footer from './Footer';
import Info from './Info';


// import ProducTools from './ProductTools';

import Review from './Review';
import Summary from './Summary';
// import Tools from './Tools';


const Home = () => {
    return (
        <div className='px-12 w-full'>

            <Banner></Banner>
            <Info></Info>
            <Products></Products>
            <Summary />



            {/* <Tools></Tools>
            <ProducTools></ProducTools> */}

            <Footer></Footer>
        </div>
    );
};

export default Home;