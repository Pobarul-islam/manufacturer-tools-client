import React, { useEffect, useState } from 'react';
import Tools from './Tools';

const Purchase = () => {
    const [services, setService] = useState([])
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>

            {
                services.map(service => <Tools
                    key={Tools._id}

                ></Tools>)
            }
        </div>
    );
};

export default Purchase;