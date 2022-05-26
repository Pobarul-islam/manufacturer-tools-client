import React from 'react';
import InfoCard from './InfoCard';


const Info = () => {

    return (
        <div className='mt-20'>
            <h2 className='text-3xl font-bold'>Tools/Parts</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10'>

                <InfoCard cardTitle="Opening Hours" bgClass=" bg-primary" img="https://i.ibb.co/mCvXX0j/tools-9.jpg"></InfoCard>
                <InfoCard cardTitle="Our Locations" bgClass="bg-neutral" img="https://i.ibb.co/mSZ0kzW/tools-11.jpg"></InfoCard>
                <InfoCard cardTitle="Contact Us" bgClass="bg-primary" img="https://i.ibb.co/DwPcGMW/tools-10.jpg"></InfoCard>
                <InfoCard cardTitle="Opening Hours" bgClass=" bg-primary" img="https://i.ibb.co/mCvXX0j/tools-9.jpg"></InfoCard>
                <InfoCard cardTitle="Our Locations" bgClass="bg-neutral" img="https://i.ibb.co/mSZ0kzW/tools-11.jpg"></InfoCard>
                <InfoCard cardTitle="Contact Us" bgClass="bg-primary" img="https://i.ibb.co/DwPcGMW/tools-10.jpg"></InfoCard>
            </div>
        </div>
    );
};

export default Info;