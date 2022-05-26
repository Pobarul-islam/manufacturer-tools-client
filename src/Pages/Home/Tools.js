import React, { useEffect, useState } from 'react';
import ProducTools from './ProductTools';


const Tools = () => {

    const [tools, setTools] = useState([])
    useEffect(() => {
        fetch("service.json")
            .then(res => res.json())
            .then(data => setTools(data))
        // console.log(setTools)
    }, [])
    return (
        <div>

            {
                tools?.map(user => <ProducTools key={user._id} user={user}></ProducTools>)



            }

        </div>
    );
};

export default Tools;