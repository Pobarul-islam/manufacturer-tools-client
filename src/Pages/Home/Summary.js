import React, { useState } from 'react';
import SummaryCard from './SummaryCard';



const Summary = () => {
    const [summaries] = useState([
        {
            id: 1,
            name: 'Dealers',
            icon: 'https://i.ibb.co/VJQ369G/people2.png',
            quantity: '200',
            plus: "+"
        },
        {
            id: 2,
            name: 'Annual Revenue',
            icon: 'https://i.ibb.co/s2nk68y/people3.png',
            quantity: '125',
            plus: "M"
        },
        {
            id: 3,
            name: 'Parts',
            icon: 'https://i.ibb.co/qRWfHdM/people1.png',
            quantity: '300',
            plus: "+"
        },
        {
            id: 4,
            name: 'Reviews',
            icon: 'https://i.ibb.co/VJQ369G/people2.png',
            quantity: '234',
            plus: "+"
        }
    ])
    return (
        <div className='mt-20'>
            <h1 className='text-3xl uppercase font-semibold text-primary mb-5 text-center'>Our Summary</h1>
            <div style={{ backgroundImage: `url(${'https://i.ibb.co/028w8Rd/8.webp'})` }} className='bg-cover md:h-screen p-12 flex justify-center items-center '>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                    {
                        summaries.map(summary => <SummaryCard
                            key={summary.id}
                            summary={summary}
                        >

                        </SummaryCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Summary;
