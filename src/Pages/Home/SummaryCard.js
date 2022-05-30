import React from 'react';
import CountUp from 'react-countup';


const SummaryCard = ({ summary }) => {


    const { name, icon, quantity } = summary;

    return (
        <div>
            <div>
                <div className="card shadow-xl border ">

                    <div className="card-body">

                        <div>
                            <img className='w-16 mx-auto bg-white p-2 rounded-lg' src={icon} alt="" />
                            <p className="text-xl uppercase text-center text-white">{name}</p>
                        </div>

                        <div>
                            <p className='text-5xl text-center font-bold text-white'>
                                <CountUp delay={2} end={quantity} duration={5} />{summary?.plus}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SummaryCard;