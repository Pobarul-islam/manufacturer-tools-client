import React from 'react';
import { Link } from 'react-router-dom';
import Products from '../Products/Products';
import Reviews from '../Review/Reviews';


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
            <p className='text-center mt-10 '>
                <Link className='btn btn-primary' to="/allproduct">All Products</Link>
            </p>
            <Summary />
            <Reviews />
            <Footer></Footer>
        </div>
    );
};

export default Home;