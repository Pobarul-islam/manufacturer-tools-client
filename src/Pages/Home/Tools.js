import React, { useEffect, useState } from 'react';
import ProducTools from './ProductTools';


const Tools = () => {

    const [tools, setTools] = useState([])
    useEffect(() => {
        fetch("service.json")
            .then(res => res.json())
            .then(data => setTools(data))

    }, [])
    return (
        <div className='mt-20'>
            <h2 className='text-4xl font-bold'>Tools/Parts</h2>
            <div className='grid grid-cols-3 gap-4'>
                {
                    tools?.map(user => <ProducTools key={user._id} user={user}></ProducTools>)
                }

            </div>
        </div>
    );
};

export default Tools;