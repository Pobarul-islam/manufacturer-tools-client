import React from 'react';
import Photo from '../../assets/images/pobarul.islam.jpg';
const Portfolio = () => {
    return (
        <div>
            <div className='bg-[#0183B5]'>
                <div className="card">
                    <figure className="pt-10">
                        <img src={Photo} alt="Shoes" className="rounded-xl border-2 p-2 w-20" />
                    </figure>
                    <div className="card-body mx-auto">
                        <div className='text-center text-white'>
                            <h2 className="text-2xl font-bold text-black">Md. Pobarul islam</h2>
                            <p className='text-sm font-semibold '>MERN Stack Web Developer</p>
                            <div className='my-5'>
                                <h5 className='font-semibold underline text-black'>Address</h5>
                                <p><span className='font-semibold'>Home:</span>Thakurgaon, Rangpur, Bangladesh</p>
                                <p><span className='font-semibold'>Phone:</span> (+88) 01721620738</p>
                                <p><span className='font-semibold'>Email:</span>pobarul.islam10@gmail.com</p>

                            </div>
                            <div className='my-5'>
                                <h5 className='font-semibold underline text-black'>Education</h5>
                                <p><span className='font-semibold'>(B.Sc.):</span> Business Studies –20196(Passing year-2018)</p>

                                <p className='font-semibold'>Thakurgaon Gov't collegt,Thakurgaon, Bangladesh</p>
                            </div>

                            <div>
                                <h5 className='font-semibold underline text-black'>Skill Highlights</h5>
                                <p><span className='font-semibold'>Expertise:</span> JavaScript, ES6, REST API, React, React Router, React Hook, SPA, HTML5, CSS3, SCSS,Bootstrap-5.</p>
                                <p><span className='font-semibold'>Comfortable:</span> Node.js, MongoDB, Firebase, Express.js</p>
                                <p><span className='font-semibold'>Tools:</span> GitHub, VS Code, Chrome Dev Tools, Heroku, Netlify, Photoshop, Figma</p>
                                <p><span className='font-semibold'>Personal Skills:</span> Leadership, Project Management, Team Work, Organizing, Negotiation</p>

                            </div>
                            <div className='my-5'>
                                <h5 className='font-semibold underline text-black'>Projects</h5>
                                <p>
                                    <span className='font-semibold'>Warehouse-management: </span>
                                    <a href="https://stockwatches.netlify.app/">Live Link</a>

                                </p>
                                <p>
                                    <span className='font-semibold'>Independent-service-provider:</span>

                                    <a href="https://polite-bombolone-755bd8.netlify.app/">Live Link</a>

                                </p>
                                <p>
                                    <span className='font-semibold'>Photo house: </span>
                                    <a href="https://endearing-crepe-b6f8b3.netlify.app/">Live Link</a>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;