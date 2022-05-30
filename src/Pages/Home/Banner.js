import React from 'react';



const Banner = () => {
    return (
        <div className=' pt-12'>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src='https://i.ibb.co/7tSrSRM/2.png' className="w-[1250px] mx-auto rounded-xl" alt='' />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src='https://i.ibb.co/Dks4MKP/3.png' className="w-[1250px] mx-auto rounded-xl" alt='' />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src='https://i.ibb.co/12ry96N/4.png' className="w-[1250px] mx-auto rounded-xl" alt='' />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src='https://i.ibb.co/519GKPR/1.png' className="w-[1250px] mx-auto rounded-xl" alt='' />
                </div>
               
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="text-center text-white text-xl bg-primary leading-tight z-10 rounded-full w-8  h-8 border-2 border-primary cursor-pointer hover:ring hover:ring-offset-2 duration-500 ring-primary">1</a>

                <a href="#item2" className="text-center text-white text-xl bg-primary leading-tight z-10 rounded-full w-8  h-8 border-2 border-primary cursor-pointer hover:ring hover:ring-offset-2 duration-500 ring-primary">2</a>
                <a href="#item3" className="text-center text-white text-xl bg-primary leading-tight z-10 rounded-full w-8  h-8 border-2 border-primary cursor-pointer hover:ring hover:ring-offset-2 duration-500 ring-primary">3</a>
                <a href="#item4" className="text-center text-white text-xl bg-primary leading-tight z-10 rounded-full w-8  h-8 border-2 border-primary cursor-pointer hover:ring hover:ring-offset-2 duration-500 ring-primary">4</a>
            
            </div>
        </div>
    );
};

export default Banner;