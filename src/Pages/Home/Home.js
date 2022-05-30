import React from 'react';
import Products from '../Products/Products';
import Banner from './Banner';
import Footer from './Footer';
import Info from './Info';
import Summary from './Summary';




const Home = () => {
    return (
        <div className='px-12 w-full'>

            <Banner></Banner>
            <Info></Info>
            <Products></Products>
            <Summary />

            <Footer></Footer>
        </div>
    );
};

export default Home;