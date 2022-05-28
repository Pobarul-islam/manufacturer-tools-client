import React, { useEffect, useState } from 'react';
import ProductTools from './ProductTools';

const Tools = () => {
    const [tools, setTools] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])

    return (
        <div>
            <h2>Tools: {tools.length}</h2>


            <div className='flex grid grid-cols-3 mt-20 gap-10'>
                {
                    tools.map(tool => <ProductTools
                        key={tool.id}
                        tool={tool}
                    ></ProductTools>)
                }
            </div>

        </div>
    );
};

export default Tools;