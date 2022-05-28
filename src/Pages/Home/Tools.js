import React, { useEffect, useState } from 'react';
import ProductTools from './ProductTools';

const Tools = () => {
    const [tools, setTools] = useState([])
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])

    return (
        <div>
            <h2>Tools: {tools.length}</h2>

            {
                tools.map(tool => <ProductTools
                    key={tool._id}
                    tool={tool}
                ></ProductTools>)
            }
        </div>
    );
};

export default Tools;