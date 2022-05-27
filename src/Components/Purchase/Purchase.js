import React from 'react';

const Purchase = () => {
    return (
        <div>
            <div className='flex h-screen justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Quantity: 50</h2>
                        <form>


                            <div className="form-control w-full max-w-xs">

                                <input
                                    type="text"
                                    placeholder="Quantity"
                                    className="input input-bordered w-full max-w-xs"

                                />

                            </div>


                            <input className='btn w-full max-w-xs mt-5 w-20 text-white' type="submit" value="Submit" />
                        </form>



                    </div>
                </div>
            </div >
        </div>
    );
};

export default Purchase;