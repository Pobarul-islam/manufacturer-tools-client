import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';
import Info from './Info';
import ProducTools from './ProductTools';
import Review from './Review';
import Tools from './Tools';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Review></Review>
            <Tools></Tools>
            <ProducTools></ProducTools>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;